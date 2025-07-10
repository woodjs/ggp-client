import { useFormik } from 'formik';
import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
  Stack,
} from '@chakra-ui/react';

import Modal from '@/components/layout/Modal/Modal';
import { useRequisite, useRequisiteType } from '@/hooks/user/useRequisite';
import { requisiteSchema } from '../requisite.schema';

export default function ModalCreate({ isOpen, onClose }) {
  const { t } = useTranslation('finance');

  const { getAll } = useRequisiteType();
  const { data, isLoading, isError } = getAll();

  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const { create } = useRequisite();
  const { mutate } = create();

  const {
    values,
    errors,
    touched,
    setErrors,
    setTouched,
    setFieldValue,
    handleBlur,
    handleSubmit,
    handleChange,
  } = useFormik({
    initialValues: {
      requisiteId: '',
      categoryId: '',
      name: '',
      value: '',
    },
    validationSchema: requisiteSchema,
    onSubmit: (payload, { resetForm }) => {
      setLoading(true);
      mutate(
        {
          ...payload,
          categoryId: +payload.categoryId,
        },
        {
          onSuccess: () => {
            resetForm();
            onClose();
          },
          onSettled: () => {
            setLoading(false);
          },
        }
      );
    },
  });

  const handleChangeCategories = (dataCategories) => {
    if (!dataCategories || !dataCategories?.length) {
      setCategories([]);
      setFieldValue('categoryId', '', false);
      return false;
    }

    return setCategories(dataCategories);
  };

  if (isLoading || isError) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={() => {
        setErrors({});
        setTouched({}, false);
        onClose();
      }}
      title={t('requisite-add-title')}
      handleClick={handleSubmit}
      blockScrollOnMount={false}
      isLoading={loading}
    >
      <Stack spacing="20px">
        <FormControl
          isRequired
          isInvalid={!!errors.requisiteId && touched.requisiteId}
        >
          <FormLabel>{t('requisite-type')}</FormLabel>
          <Select
            placeholder={t('requisite-type-placeholder')}
            name="requisiteId"
            onBlur={handleBlur}
            value={values.requisiteId}
            onChange={(e) => {
              setFieldValue('categoryId', '', false);
              handleChange(e);
              const type = data.find((item) => item.id === +e.target.value);
              handleChangeCategories(type?.categories);
            }}
          >
            {data.map(({ id, name }) => (
              <option key={id} value={id}>
                {name}
              </option>
            ))}
          </Select>
          <FormErrorMessage>{t(errors.requisiteId)}</FormErrorMessage>
        </FormControl>
        <FormControl
          isRequired
          isInvalid={!!errors.categoryId && touched.categoryId}
        >
          <FormLabel>{t('requisite-category')}</FormLabel>
          <Select
            placeholder={
              categories?.length
                ? t('requisite-category-placeholder')
                : t('requisite-category-placeholder-empty')
            }
            name="categoryId"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.categoryId}
          >
            {categories?.length
              ? categories.map(({ id, name }) => (
                  <option key={id} value={id}>
                    {name}
                  </option>
                ))
              : null}
          </Select>
          <FormErrorMessage>{t(errors.categoryId)}</FormErrorMessage>
        </FormControl>
        <FormControl>
          <FormLabel>{t('requisite-name')}</FormLabel>
          <Input
            placeholder={t('requisite-name-placeholder')}
            onChange={handleChange}
            name="name"
            onBlur={handleBlur}
            value={values.name}
          />
        </FormControl>
        <FormControl isRequired isInvalid={!!errors.value && touched.value}>
          <FormLabel>{t('requisite-wallet')}</FormLabel>
          <Input
            placeholder={t('requisite-wallet-placeholder')}
            onChange={handleChange}
            name="value"
            onBlur={handleBlur}
            value={values.value}
          />
          <FormErrorMessage>{t(errors.value)}</FormErrorMessage>
        </FormControl>
      </Stack>
    </Modal>
  );
}
