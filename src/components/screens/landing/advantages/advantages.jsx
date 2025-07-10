import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { Container } from '../Container';
import { GreenText } from '../GreenText';
import { Text } from '../Text';
import { Title } from '../Title';
import classnames from './advantages.module.css';

function Advantages() {
  const { t } = useTranslation();
  return (
    <div
      id="advantages"
      style={{
        backgroundImage: 'url("/images/landing/advantages-bg.png")',
      }}
    >
      <Container>
        <div className={classnames.wrapper}>
          <Title>
            <GreenText>{t('landing:advantages.title-green')}</GreenText>
            <span className={classnames.title}>
              {t('landing:advantages.title')}
            </span>
          </Title>
          <div className={classnames.container}>
            <div className={classnames.item}>
              <Image
                width={115}
                height={115}
                className={classnames.image}
                src="/images/landing/advantage-1.png"
                alt="advantage"
              />
              <Text className={classnames.text}>
                {t('landing:advantages.text-1')}
              </Text>
            </div>
            <div className={classnames.item}>
              <Image
                width={115}
                height={115}
                className={classnames.image}
                src="/images/landing/advantage-2.png"
                alt="advantage"
              />
              <Text className={classnames.text}>
                {t('landing:advantages.text-2')}
              </Text>
            </div>
            <div className={classnames.item}>
              <Image
                width={115}
                height={115}
                className={classnames.image}
                src="/images/landing/advantage-3.png"
                alt="advantage"
              />
              <Text className={classnames.text}>
                {t('landing:advantages.text-3')}
              </Text>
            </div>
            <div className={classnames.item}>
              <Image
                width={115}
                height={115}
                className={classnames.image}
                src="/images/landing/advantage-4.png"
                alt="advantage"
              />
              <Text className={classnames.text}>
                {t('landing:advantages.text-4')}
              </Text>
            </div>
            <div className={classnames.item}>
              <Image
                width={115}
                height={115}
                className={classnames.image}
                src="/images/landing/advantage-5.png"
                alt="advantage"
              />
              <Text className={classnames.text}>
                {t('landing:advantages.text-5')}
              </Text>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Advantages;
