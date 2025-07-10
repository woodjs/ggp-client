import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { Container } from '../Container';
import { Title } from '../Title';
import classnames from './tgeCharts.module.css';

function TgeCharts() {
  const { t } = useTranslation('landing');
  return (
    <Container>
      <Title className={classnames.title}>{t('tgeCharts.title')}</Title>
      <div className={classnames.stack}>
        <Image
          width={1000}
          height={1000}
          className={classnames.image}
          src={t('tgeCharts.image.desktop')}
          alt="tge-charts"
        />{' '}
        <Image
          width={1000}
          height={1000}
          className={classnames['image-tablet']}
          src={t('tgeCharts.image.tablet')}
          alt="tge-charts"
        />{' '}
        <Image
          width={500}
          height={500}
          className={classnames['image-mobile']}
          src={t('tgeCharts.image.mobile')}
          alt="tge-charts"
        />
      </div>
    </Container>
  );
}

export default TgeCharts;
