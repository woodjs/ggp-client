import { useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';

import { usePrivacy, usePrivacyUpdate } from '@/hooks/user/usePrivacy';
import { Grid, GridItem } from '@chakra-ui/react';
import ProfileForm from '../../ProfileForm';
import ProfileCardBody from '../../Card/CardBody/CardBody';
import ProfilePrivacyItem from './ProfilePrivacyItem';
import ProfilePrivacySekeleton from './ProfilePrivacy.skeleton';

export default function ProfilePrivacy() {
  const { t } = useTranslation('profile');

  const { data, isLoading } = usePrivacy();
  const { mutate } = usePrivacyUpdate();

  const [selectInitital, setSelectedInitial] = useState({});
  const [selectedOption, setSelectedOption] = useState({});

  const handleSelectChange = (e) => {
    setSelectedOption({ ...selectedOption, [e.target.name]: +e.target.value });
  };

  const handleSubmit = () => {
    if (selectedOption === selectInitital) return false;

    // Функция, которая берет объект и возвращает новый объект, в котором есть только те ключи, значения которых отличаются от значений в объекте initial
    const result = Object.keys(selectedOption).reduce((acc, key) => {
      if (selectedOption[key] !== selectInitital[key]) {
        acc[key] = selectedOption[key];
      }
      return acc;
    }, {});

    mutate(result, {
      onSuccess: () => {
        setSelectedInitial(selectedOption);
      },
    });

    return true;
  };

  useEffect(() => {
    if (!data) return;

    setSelectedOption(data);
    setSelectedInitial(data);
  }, [data]);

  if (isLoading) return <ProfilePrivacySekeleton />;

  return (
    <ProfileCardBody mt="50px">
      <ProfileForm
        onSubmit={handleSubmit}
        isDisabled={
          JSON.stringify(selectedOption) === JSON.stringify(selectInitital)
        }
      >
        <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={6} w="full">
          <GridItem>
            <ProfilePrivacyItem
              title="privacy-email"
              handleChange={handleSelectChange}
              name="email"
              value={selectedOption.email ?? data?.email}
              options={[
                { value: 1, label: t('select-all') },
                { value: 0, label: t('select-me') },
              ]}
            />
          </GridItem>
          <GridItem>
            <ProfilePrivacyItem
              title="privacy-tg"
              handleChange={handleSelectChange}
              name="tg"
              value={selectedOption.tg ?? data?.tg}
              options={[
                { value: 1, label: t('select-all') },
                { value: 0, label: t('select-me') },
              ]}
            />
          </GridItem>

          <GridItem>
            <ProfilePrivacyItem
              title="privacy-fb"
              handleChange={handleSelectChange}
              name="fb"
              value={selectedOption.fb ?? data?.fb}
              options={[
                { value: 1, label: t('select-all') },
                { value: 0, label: t('select-me') },
              ]}
            />
          </GridItem>
          <GridItem>
            <ProfilePrivacyItem
              title="privacy-ig"
              handleChange={handleSelectChange}
              name="ig"
              value={selectedOption.ig ?? data?.ig}
              options={[
                { value: 1, label: t('select-all') },
                { value: 0, label: t('select-me') },
              ]}
            />
          </GridItem>

          <GridItem>
            <ProfilePrivacyItem
              title="privacy-website"
              handleChange={handleSelectChange}
              name="website"
              value={selectedOption.website ?? data?.website}
              options={[
                { value: 1, label: t('select-all') },
                { value: 0, label: t('select-me') },
              ]}
            />
          </GridItem>

          <GridItem>
            <ProfilePrivacyItem
              title="privacy-top"
              handleChange={handleSelectChange}
              name="top"
              value={selectedOption.top ?? data?.top}
              options={[
                { value: 1, label: t('yes') },
                { value: 0, label: t('no') },
              ]}
            />
          </GridItem>
        </Grid>
      </ProfileForm>
    </ProfileCardBody>
  );
}
