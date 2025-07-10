import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { Container } from '@/components/screens/landing/Container';
import Image from 'next/image';
import { Stack, Box } from '@chakra-ui/react';
import { Title } from '@/components/screens/landing/Title';
import { GreenText } from '@/components/screens/landing/GreenText';
// import { Text } from '@/components/screens/landing/Text';
import { Button } from '@/components/screens/landing/Button';
import styles from './contacts.module.css';

function Contacts() {
  const { t } = useTranslation();
  return (
    <div className={styles.contacts}>
      <Container>
        <div className={styles.contacts__wrap}>
          {/* <div>
            <Title className={styles.contacts__title}>
              {t('landing:contacts.title')}
            </Title>
            <Text className={styles.contacts__info}>
              <a href="tel:+0964691190">+0964691190</a>
              <p>
                18, 98 M.6 Soi Sreekor, Kathu, Kathu
                <br /> District, Phuket 83120
              </p>
            </Text>
          </div> */}
          <div className={styles.contacts__content}>
            <Title className={styles.contacts__desc}>
              {t('landing:contacts.text')}
              <GreenText> {t('landing:contacts.text.green')}</GreenText>
            </Title>
            <Box style={{ position: 'relative' }} alignContent="center">
              <Link
                href="/auth/register"
                style={{ position: 'relative', zIndex: '1' }}
              >
                <Button style={{ position: 'relative' }}>
                  {t('landing:contacts.btn')}
                </Button>
              </Link>
              <Image
                style={{
                  position: 'absolute',
                  zIndex: '0',
                  top: '-14px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                }}
                src="/images/promo-modal/expansion/pine0.png"
                alt="pine"
                width={420}
                height={270}
              />
            </Box>
          </div>
          {/* <Image
            src="/images/promo-modal/expansion/sideLights.svg"
            width={200}
            height={270}
            style={{
              position: 'absolute',
              zIndex: '0',
              bottom: '-240px',
              left: '180px',
              transform: 'rotate(-76deg)',
            }}
            className={styles.nyImage}
          /> */}
          {/* <Image
            src="/images/promo-modal/expansion/sideLights.svg"
            width={140}
            height={200}
            style={{
              position: 'absolute',
              left: '50%',
              top: '10%',
              transform: 'rotate(-90deg) translateX(-50%)',
            }}
            className={styles.nyImage2}
          /> */}
        </div>
      </Container>
    </div>
  );
}

export default Contacts;
