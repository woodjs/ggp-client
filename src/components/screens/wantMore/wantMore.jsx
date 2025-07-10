import { useTranslation } from 'next-i18next';
import { Container } from '@/components/screens/landing/Container';
import { Title } from '@/components/screens/landing/Title';
import { GreenText } from '@/components/screens/landing/GreenText';
import { Text } from '@/components/screens/landing/Text';
import { Button } from '@/components/screens/landing/Button';
import { SocialList } from '@/components/screens/landing/SocialList';
import styles from './wantMore.module.css';

function Extra() {
  const { t } = useTranslation();
  return (
    <div className={styles.wantMore}>
      <Container>
        <div className={styles.wantMore__wrap}>
          <div className={styles.wantMore__text_wrap}>
            <Title className={styles.wantMore__title}>
              {t('landing:wantMore.title')}
              <GreenText> {t('landing:wantMore.title.green')}</GreenText>
            </Title>
            <Button classname={styles.wantMore__btn}>
              {t('landing:wantMore.btn')}
            </Button>
            <SocialList className={styles.wantMore__social} direction="row" />
          </div>
          <div className={styles.wantMore__img_wrap}>
            <img
              className={styles.wantMore__img}
              src="/images/landing/reg-picture.png"
              alt="Reg"
            />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Extra;
