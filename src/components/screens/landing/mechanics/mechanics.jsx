import { useTranslation } from 'next-i18next';
import { Container } from '@/components/screens/landing/Container';
import { Title } from '@/components/screens/landing/Title';
import { GreenText } from '@/components/screens/landing/GreenText';
import { Text } from '@/components/screens/landing/Text';
import styles from './mechanics.module.css';

function Mechanics() {
  const { t } = useTranslation('landing');
  return (
    <Container>
      <div className={styles.mechanics}>
        <Title className={styles.title}>
          {t('mehanics.title')}{' '}
          <GreenText>{t('mehanics.title.green')}</GreenText>
        </Title>
        <div className={styles.mechanics__wrap}>
          <Text className={styles.mechanics__item}>{t('mehanics.item-1')}</Text>
          <Text className={styles.mechanics__item}>{t('mehanics.item-2')}</Text>
          <Text className={styles.mechanics__item}>{t('mehanics.item-3')}</Text>
        </div>
      </div>
    </Container>
  );
}

export default Mechanics;
