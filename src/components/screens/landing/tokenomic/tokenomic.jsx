import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { Container } from '../Container';
import { GreenText } from '../GreenText';
import { Text } from '../Text';
import { Title } from '../Title';
import classnames from './features.module.css';

function TokenomicItem({
  contentStyle,
  greenTitle,
  title,
  children,
  reverse,
  src,
  imageStyle,
  withoutBorder,
}) {
  return (
    <div
      className={`${classnames.feature} ${reverse ? classnames.reverse : ''}`}
    >
      <div
        style={contentStyle}
        className={`${classnames.content} ${
          !withoutBorder ? classnames.border : ''
        }`}
      >
        <Text
          style={{ lineHeight: '36.57px', maxWidth: '95%' }}
          className={classnames.title}
        >
          <div className={classnames.circle} />
          <GreenText>{greenTitle}</GreenText>
          <br /> {title}
        </Text>
        {children}
      </div>
      <div className={`${classnames['image-container']}`}>
        {src && (
          <Image
            width={400}
            height={400}
            style={imageStyle}
            className={classnames.image}
            src={src}
            alt="feature"
          />
        )}
      </div>
    </div>
  );
}

function Tokenomic() {
  const { t } = useTranslation();
  return (
    <div style={{ overflow: 'hidden' }}>
      <Container>
        <Title style={{ marginBottom: '70px', marginTop: '90px' }}>
          <GreenText>{t('landing:tokenomic.title')}</GreenText>
        </Title>
        <TokenomicItem
          imageStyle={{
            height: '440px',
            objectFit: 'contain',
            position: 'absolute',
            bottom: '-40px',
          }}
          src="/images/landing/tokenomic-1.png"
          greenTitle={t('landing:tokenomic.title-green-1')}
          title={t('landing:tokenomic.title-1')}
        >
          <Text
            dangerouslySetInnerHTML={{
              __html: t('landing:tokenomic.text-1'),
            }}
          />
        </TokenomicItem>
        <TokenomicItem
          imageStyle={{
            marginLeft: 'auto',
            height: '150px',
            objectFit: 'contain',
            // position: 'absolute',

            transform: 'scale(4)',
            bottom: 0,
            paddingTop: '10px',
            paddingBottom: '10px',
          }}
          src="/images/landing/tokenomic-2.png"
          reverse
          greenTitle={t('landing:tokenomic.title-green-2')}
        >
          <Text
            dangerouslySetInnerHTML={{
              __html: t('landing:tokenomic.text-2'),
            }}
          />
        </TokenomicItem>
        <TokenomicItem
          greenTitle={t('landing:tokenomic.title-green-3')}
          withoutBorder
        >
          <Text
            dangerouslySetInnerHTML={{
              __html: t('landing:tokenomic.text-3'),
            }}
          />
        </TokenomicItem>
      </Container>
    </div>
  );
}

export default Tokenomic;
