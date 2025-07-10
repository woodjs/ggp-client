import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { Container } from '../Container';
import { Text } from '../Text';
import classnames from './tgeCharts.module.css';

function TgeCharts2() {
  const { t } = useTranslation('landing');
  return (
    <Container>
      <div className={classnames.desktop}>
        <div>
          <Image
            width={1000}
            height={1000}
            className={classnames.image}
            src={t('tgeCharts2.image.desktop')}
            alt="tge-charts"
          />{' '}
          <Text className={classnames.text}>{t('tgeCharts2.text')}</Text>
        </div>
        <Image
          width={1000}
          height={1000}
          className={classnames.image}
          src={t('tgeCharts2.image.desktop-2')}
          alt="tge-charts"
        />
      </div>
      <div className={classnames.notDesktop}>
        <div className={classnames.stack}>
          <Image
            width={1000}
            height={1000}
            className={classnames['image-tablet']}
            src={t('tgeCharts2.image.tablet')}
            alt="tge-charts"
          />{' '}
          <Image
            width={500}
            height={500}
            className={classnames['image-mobile']}
            src={t('tgeCharts2.image.mobile')}
            alt="tge-charts"
          />
        </div>
        <Text className={classnames.text}>{t('tgeCharts2.text')}</Text>
      </div>
    </Container>
  );
}

export default TgeCharts2;
