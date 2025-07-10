import dayjs from 'dayjs';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import Link from 'next/link';
import { useDisclosure, Stack, Box, Center } from '@chakra-ui/react';
import NYModal from '@/components/layout/NYModal/NYModal';
import Timer from '@/widgets/timer/Timer';
import { Button } from '../Button';
import { CheckNFT } from '../CheckNFT';
import { Container } from '../Container';
import { SocialList } from '../SocialList';
import classnames from './hero.module.css';

function Hero() {
  const { t } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div
      style={{
        backgroundImage: 'url(/images/landing/hero-bg.png)',
        backgroundSize: 'cover',
      }}
      className={classnames.wrapper}
    >
      <Container align="center">
        <div className={classnames.hero}>
          <Image
            src="/images/promo-modal/expansion/heroLights.svg"
            width={800}
            height={270}
            style={{
              position: 'absolute',
              zIndex: '0',
              top: '-50px',
              transform: 'rotateX(180deg) ',
              border: '1px solid',
              borderRadius: '20px',
            }}
            className={classnames.nyImage2}
          />
          <Image
            src="/images/promo-modal/expansion/heroLights.svg"
            width={800}
            height={270}
            style={{
              position: 'absolute',
              zIndex: '0',
              top: '-50px',
              transform: 'translateX(80%)',
              border: '1px solid',
              borderRadius: '20px',
            }}
            className={classnames.nyImage}
          />
          <div className={classnames.content}>
            <Image
              width={223}
              height={76}
              src="/images/landing/hero-logo.svg"
              alt="logo"
            />

            <h1 className={classnames.title}>
              <span className={classnames.green}>{t('landing:hero.name')}</span>
              <br />
            </h1>
          </div>
          <p className={classnames.timer__title}> {t('landing:hero.title')}</p>

          <Stack pos="relative" w="100%" spacing={4}>
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
            <Center mt="10px">
              <SocialList className={classnames.social_list} direction="row" />
            </Center>
            <Link href="/auth/register">
              <Button
                style={{
                  position: 'relative',
                  margin: '0 auto',
                  marginTop: '20px',
                  maxWidth: '300px',
                  transition: '0.3s',
                  zIndex: '1',
                }}
              >
                {t('landing:wantMore.btn')}
              </Button>
            </Link>
          </Stack>
        </div>

        {/* <CheckNFT /> */}
      </Container>
      <NYModal isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
    </div>
  );
}

export default Hero;
