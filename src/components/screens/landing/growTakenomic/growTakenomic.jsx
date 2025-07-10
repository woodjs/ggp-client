import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { Container } from '../Container';
import { Text } from '../Text';
import { Title } from '../Title';
import classnames from './growTakenomic.module.css';

function GrowTakenomic() {
  const { t } = useTranslation('landing');
  return (
    <Container>
      <Title className={classnames.title}>
        {t('growTakenomic.title')} {t('growTakenomic.title-green')}
      </Title>
      <Text className={classnames.subtitle}>{t('growTakenomic.subtitle')}</Text>
      <div className={classnames.stack}>
        <Image
          width={1000}
          height={1000}
          loading="lazy"
          className={classnames.image}
          src={t('growTakenomic.image.desktop')}
          alt="grow"
        />
        <Image
          width={1000}
          height={1000}
          loading="lazy"
          className={classnames['image-tablet']}
          src={t('growTakenomic.image.tablet')}
          alt="grow"
        />{' '}
        <Image
          width={500}
          height={500}
          loading="lazy"
          className={classnames['image-mobile']}
          src={t('growTakenomic.image.mobile')}
          alt="grow"
        />{' '}
      </div>
      <Text className={classnames.text}>{t('growTakenomic.text')}</Text>
    </Container>
  );
}

export default GrowTakenomic;
