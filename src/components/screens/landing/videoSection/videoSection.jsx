import { useTranslation } from 'next-i18next';
import { Box } from '@chakra-ui/react';
import Image from 'next/image';
import { Container } from '../Container';
import { GreenText } from '../GreenText';
import { Text } from '../Text';
import classnames from './videoSection.module.css';

function VideoSection() {
  const { t } = useTranslation();

  return (
    <Container>
      <div className={classnames.container}>
        <Text className={classnames.text}>
          <GreenText shadow>{t('landing:video.text-green')}</GreenText>{' '}
          {t('landing:video.text')}
        </Text>
        <Box className={classnames.imageW}>
          <Image
            src="/images/promo-modal/expansion/pine2.png"
            alt="pine"
            width={250}
            height={300}
            className={classnames.nyImage}
          />

          <Image
            style={{
              position: 'absolute',
              zIndex: '1',
              bottom: '-120px',
              left: '-130px',
            }}
            src="/images/promo-modal/expansion/pine3.png"
            alt="pine"
            width={250}
            height={270}
            className={classnames.nyImage2}
          />
          <video
            className={classnames.video}
            controls={false}
            muted
            autoPlay
            src="/videos/landing/weed.mp4"
          >
            Your browser does not support the video tag.
            <track kind="captions" />
          </video>
        </Box>
        {/* <iframe
          className={classnames.video}
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        /> */}
      </div>
    </Container>
  );
}

export default VideoSection;
