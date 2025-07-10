import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { Container } from '../Container';
import { GreenText } from '../GreenText';
import { Text } from '../Text';
import { Title } from '../Title';
import classnames from './tokenomicHero.module.css';
import mainImage from '../../../../../public/images/landing/tokenomic-hero.png';

function TokenomicHero() {
  const { t } = useTranslation('landing');
  return (
    <div className={classnames.wrapper}>
      <Image
        width={700}
        className={classnames.image}
        src={mainImage}
        alt="tokenomic-hero"
      />
      <Container className={classnames.container}>
        <Title>
          <GreenText>{t('tokenomicHero.title-green')}</GreenText>{' '}
          <span className={classnames.nowrap}>{t('tokenomicHero.title')}</span>
        </Title>
        <div className={classnames.card}>
          <Text className={classnames.cardTitle}>
            <GreenText>{t('tokenomicHero.card.title')}</GreenText>
          </Text>
          <Text className={classnames.cardText}>
            {t('tokenomicHero.card.text')}{' '}
            <GreenText>{t('tokenomicHero.card.text-green')}</GreenText>
          </Text>
        </div>
        <Text className={classnames.text}>{t('tokenomicHero.text')}</Text>
      </Container>
    </div>
  );
}

export default TokenomicHero;
