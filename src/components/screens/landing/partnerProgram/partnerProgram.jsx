import { useTranslation } from 'next-i18next';
import { Container } from '@/components/screens/landing/Container';
import { Title } from '@/components/screens/landing/Title';
import { GreenText } from '@/components/screens/landing/GreenText';
import { Text } from '@/components/screens/landing/Text';
import styles from './partnerProgram.module.css';

function Extra() {
  const { t } = useTranslation();
  return (
    <div id="partner" className={styles.program__bg}>
      <Container>
        <Title className={styles.program__title}>
          {t('landing:partnerProgram.title')}{' '}
          <GreenText>{t('landing:partnerProgram.title.green')}</GreenText>
        </Title>
        <div className={styles.program__wrap}>
          <div className={styles.program__item}>
            <div className={styles.program__sum}>
              <GreenText>01</GreenText>
            </div>
            <Text>{t('landing:partnerProgram.item-1')}</Text>
          </div>
          <div className={styles.program__item}>
            <div className={styles.program__sum}>
              <GreenText>02</GreenText>
            </div>
            <Text>{t('landing:partnerProgram.item-2')}</Text>
          </div>
          <div className={styles.program__item}>
            <div className={styles.program__sum}>
              <GreenText>03</GreenText>
            </div>
            <Text>{t('landing:partnerProgram.item-3')}</Text>
          </div>
          <div className={styles.program__item}>
            <div className={styles.program__sum}>
              <GreenText>04</GreenText>
            </div>
            <Text>{t('landing:partnerProgram.item-4')}</Text>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Extra;
