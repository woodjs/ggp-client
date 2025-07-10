import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { Container } from '../Container';
import { GreenText } from '../GreenText';
import { Text } from '../Text';
import classnames from './features.module.css';

function FeaturesItem({ title, children, reverse, src }) {
  return (
    <div
      className={`${classnames.feature} ${reverse ? classnames.reverse : ''}`}
    >
      <div className={`${classnames.content} ${classnames.border}`}>
        <Text className={classnames.title}>
          <div className={classnames.circle} /> {title}
        </Text>
        {children}
      </div>
      <div className={`${classnames['image-container']} ${classnames.border}`}>
        <Image
          width={700}
          height={700}
          quality={100}
          className={classnames.image}
          src={src}
          alt="feature"
        />
      </div>
    </div>
  );
}

function Features() {
  const { t } = useTranslation();
  return (
    <div>
      <Container style={{ position: 'relative' }}>
        <FeaturesItem
          src="/images/landing/feature-1.png"
          title={t('landing:features.legitimacy')}
        >
          <Text
            dangerouslySetInnerHTML={{
              __html: t('landing:features.legitimacy.text-1'),
            }}
          />
          <Text
            dangerouslySetInnerHTML={{
              __html: t('landing:features.legitimacy.text-2'),
            }}
          />
        </FeaturesItem>
        <FeaturesItem
          src="/images/landing/feature-2.png"
          reverse
          title={t('landing:features.science')}
        >
          <Text
            dangerouslySetInnerHTML={{
              __html: t('landing:features.science.text'),
            }}
          />
          <Text className={classnames.text}>
            <span
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: t('landing:features.science.p-1'),
              }}
            />
            <br />
            <span
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: t('landing:features.science.p-2'),
              }}
            />
            <br />
            <span
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: t('landing:features.science.p-3'),
              }}
            />
            <br />
            <span
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: t('landing:features.science.p-4'),
              }}
            />
          </Text>
        </FeaturesItem>
        <FeaturesItem
          src="/images/landing/feature-3.png"
          title={t('landing:features.sales')}
        >
          <Text
            dangerouslySetInnerHTML={{
              __html: t('landing:features.sales.text'),
            }}
          />
        </FeaturesItem>

        <FeaturesItem
          src="/images/landing/feature-4.png"
          reverse
          title={t('landing:features.potential')}
        >
          <div style={{ position: 'relative' }}>
            <Text>
              <GreenText className={classnames.bold}>
                {t('landing:features.potential.title-1')}
              </GreenText>
            </Text>
            <Text> {t('landing:features.potential.text-1')}</Text>
          </div>
          <div>
            <Text>
              <GreenText className={classnames.bold}>
                {t('landing:features.potential.title-2')}
              </GreenText>
            </Text>
            <Text> {t('landing:features.potential.text-2')}</Text>
          </div>
          <div>
            <Text>
              <GreenText className={classnames.bold}>
                {t('landing:features.potential.title-3')}
              </GreenText>
            </Text>
            <Text> {t('landing:features.potential.text-3')}</Text>
          </div>
        </FeaturesItem>
        <Image
          src="/images/promo-modal/expansion/sideLights.svg"
          width={200}
          height={1200}
          style={{
            position: 'absolute',
            top: '47%',
            left: '-100px',
          }}
        />
      </Container>
    </div>
  );
}

export default Features;
