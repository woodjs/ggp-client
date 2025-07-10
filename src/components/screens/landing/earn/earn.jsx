import { useTranslation } from 'next-i18next';
import { Container } from '@/components/screens/landing/Container';
import { Title } from '@/components/screens/landing/Title';
import { GreenText } from '@/components/screens/landing/GreenText';
import { Text } from '@/components/screens/landing/Text';
import styles from './earn.module.css';

function Earn() {
  const { t } = useTranslation();
  return (
    <div className={styles.earn__bg}>
      <Container>
        <Title className={styles.earn__title}>
          <GreenText>{t('landing:earn.title.green')} </GreenText>
          {t('landing:earn.title')}
        </Title>
        <div className={styles.earn__wrap}>
          <Text className={styles.earn__item}>{t('landing:earn.item-1')}</Text>
          <Text className={styles.earn__item}>{t('landing:earn.item-2')}</Text>
          <Text className={styles.earn__item}>{t('landing:earn.item-3')}</Text>
          <Text className={styles.earn__item}>{t('landing:earn.item-4')}</Text>
        </div>
      </Container>
    </div>
  );
}

export default Earn;
