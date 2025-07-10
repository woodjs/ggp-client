import { useTranslation } from 'next-i18next';
import { Container } from '@/components/screens/landing/Container';
import { Title } from '@/components/screens/landing/Title';
import { GreenText } from '@/components/screens/landing/GreenText';
import { Text } from '@/components/screens/landing/Text';
import Button from '@/components/screens/landing/Button/Button';
import styles from './goPartner.module.css';
import Link from 'next/link';

function GoPartner() {
  const { t } = useTranslation();
  return (
    <div className={styles.partner__bg}>
      <Container>
        <div className={styles.partner}>
          <div className={styles.partner__go}>
            <img
              className={styles.partner__logo}
              src="/images/landing/logo.svg"
              alt=""
            />
            <div className={styles.partner__gp_text}>
              <Title>{t('landing:goPartner.title')}</Title>
              <Text className={styles.partner__gp_sub}>
                {t('landing:goPartner.subtitle')}
              </Text>
            </div>
          </div>
          <div className={styles.partner__desc}>
            <Title className={styles.partner__desc_text}>
              <p>
                {t('landing:goPartner.text-1')}
                <GreenText shadow>
                  {' '}
                  {t('landing:goPartner.text.green')}
                </GreenText>{' '}
                {t('landing:goPartner.text-2')}
              </p>
              <br />
              <p>{t('landing:goPartner.text-3')}</p>
            </Title>
            <Link href="/auth/register">
              <Button>{t('landing:goPartner.btn')}</Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default GoPartner;
