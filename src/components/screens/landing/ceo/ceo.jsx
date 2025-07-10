import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { Circle } from '../Circle';
import { Container } from '../Container';
import { GreenText } from '../GreenText';
import { Text } from '../Text';
import { Title } from '../Title';
import classnames from './ceo.module.css';
import imageDesktop from '../../../../../public/images/landing/ceo-main.png';
import imageMobile from '../../../../../public/images/landing/ceo-main-mobile.png';
import imageTablet from '../../../../../public/images/landing/ceo-main-tablet.png';

function Ceo() {
  const { t } = useTranslation();
  return (
    <div id="ceo">
      <div
        style={{
          backgroundImage: 'url("/images/landing/ceo-bg.png")',
          backgroundSize: 'cover',
        }}
      >
        <Container>
          <div className={classnames.wrapper}>
            <Title>
              <GreenText>{t('landing:ceo.title-green')}</GreenText>{' '}
              <span className={classnames.title}>{t('landing:ceo.title')}</span>
            </Title>
            <div className={classnames.container}>
              <Image
                quality={100}
                className={classnames.image}
                src={imageDesktop}
                alt="ceo"
              />
              <Image
                className={classnames['image-mobile']}
                quality={100}
                src={imageMobile}
                alt="ceo"
              />
              <Image
                className={classnames['image-tablet']}
                src={imageTablet}
                alt="ceo"
              />
              <div className={classnames.list}>
                <div className={classnames.line}>
                  <Circle className={classnames.circle} />{' '}
                  <Text
                    className={classnames.text}
                    dangerouslySetInnerHTML={{
                      __html: t('landing:ceo.text-1'),
                    }}
                  />
                </div>
                <div className={classnames.line}>
                  <Circle className={classnames.circle} />
                  <Text>
                    {t('landing:ceo.text-2')}{' '}
                    <a
                      className={classnames.link}
                      href="https://fclub.pro/author/nikitaryabin"
                    >
                      {t('landing:ceo.text-2-link')}
                    </a>
                  </Text>
                </div>
                <div className={classnames.line}>
                  <Circle className={classnames.circle} />
                  <Text>
                    {t('landing:ceo.text-3')}{' '}
                    <a className={classnames.link} href="https://turbo-fb.ru/">
                      {t('landing:ceo.text-3-link')}
                    </a>
                  </Text>
                </div>
                <div className={classnames.line}>
                  <Circle className={classnames.circle} />
                  <Text>
                    {t('landing:ceo.text-4')}{' '}
                    <a className={classnames.link} href="https://gg-pharm.com/">
                      {t('landing:ceo.text-4-link')}
                    </a>
                  </Text>
                </div>
                <div className={classnames.line}>
                  <Circle className={classnames.circle} />
                  <Text
                    className={classnames.text}
                    dangerouslySetInnerHTML={{
                      __html: t('landing:ceo.text-5'),
                    }}
                  />
                </div>
              </div>
              <div
                className={`${classnames.list} ${classnames['list-bottom']}`}
              >
                <div className={classnames.line}>
                  <Circle className={classnames.circle} />
                  <Text>
                    {t('landing:ceo.text-9')}{' '}
                    <a
                      className={classnames.link}
                      href="https://vk.com/legendsk8"
                    >
                      {t('landing:ceo.text-9-link')}
                    </a>
                  </Text>
                </div>
                <div className={classnames.line}>
                  <Circle className={classnames.circle} />
                  <Text>
                    {t('landing:ceo.text-6')}{' '}
                    <a
                      className={classnames.link}
                      href="https://t.me/+zvUGSCc-ecowY2Yy"
                    >
                      {t('landing:ceo.text-6-link')}
                    </a>
                  </Text>
                </div>
                <div className={classnames.line}>
                  <Circle className={classnames.circle} />
                  <Text>
                    {t('landing:ceo.text-7')}{' '}
                    <a
                      className={classnames.link}
                      href="https://weed-finder.store/"
                    >
                      {t('landing:ceo.text-7-link')}
                    </a>
                  </Text>
                </div>
                <div className={classnames.line}>
                  <Circle className={classnames.circle} />
                  <Text>
                    {t('landing:ceo.text-8')}{' '}
                    <a
                      className={classnames.link}
                      href="https://t.me/thaiexpat999"
                    >
                      {t('landing:ceo.text-8-link')}
                    </a>
                  </Text>
                </div>
              </div>
            </div>
          </div>
          {/* <Image
            src="/images/promo-modal/expansion/sideStarLights.png"
            width={400}
            height={1200}
            className={classnames.nyImage}
          />
          <Image
            src="/images/promo-modal/expansion/sideStarLights.png"
            width={400}
            height={1200}
            className={classnames.nyImage2}
          /> */}
        </Container>
      </div>
    </div>
  );
}

export default Ceo;
