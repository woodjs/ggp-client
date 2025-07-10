import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { Container } from '../Container';
import { GreenText } from '../GreenText';
import { Text } from '../Text';
import { Title } from '../Title';
import classnames from './mainQuestions.module.css';

function MainQuestions() {
  const { t } = useTranslation();
  return (
    <div id="invests" style={{ overflow: 'hidden', zIndex: '0' }}>
      <div
        style={{
          backgroundImage: 'url("/images/landing/main-questions-bg.png")',
          backgroundSize: 'cover',
        }}
      >
        <Container>
          <div className={classnames.container}>
            <div className={classnames.block}>
              <Title>
                {t('landing:mainQuestions.invests.title')}
                <GreenText>
                  {' '}
                  {t('landing:mainQuestions.invests.title-green')}
                </GreenText>
              </Title>
              <div className={classnames.list}>
                <div
                  // style={{
                  //   backgroundImage:
                  //     'url("/images/landing/invests-answer-1.svg")',
                  // }}
                  className={classnames.item}
                >
                  <div className={classnames.item_num}>01</div>
                  <Text className={classnames.text}>
                    {t('landing:mainQuestions.invests.text-1')}
                  </Text>
                </div>
                <div
                  // style={{
                  //   backgroundImage:
                  //     'url("/images/landing/invests-answer-2.svg")',
                  // }}
                  className={classnames.item}
                >
                  <div className={classnames.item_num}>02</div>
                  <Text className={classnames.text}>
                    {t('landing:mainQuestions.invests.text-2')}
                  </Text>
                </div>
                <div
                  // style={{
                  //   backgroundImage:
                  //     'url("/images/landing/invests-answer-3.svg")',
                  // }}
                  className={classnames.item}
                >
                  <div className={classnames.item_num}>03</div>
                  <Text className={classnames.text}>
                    {t('landing:mainQuestions.invests.text-3')}
                  </Text>
                </div>
                <div
                  // style={{
                  //   backgroundImage:
                  //     'url("/images/landing/invests-answer-4.svg")',
                  // }}
                  className={classnames.item}
                >
                  <div className={classnames.item_num}>04</div>
                  <Text className={classnames.text}>
                    {t('landing:mainQuestions.invests.text-4')}
                  </Text>
                </div>
              </div>
            </div>
            <div className={classnames.block}>
              <Title>
                {t('landing:mainQuestions.token.title')}
                <GreenText>
                  {' '}
                  {t('landing:mainQuestions.token.title-green')}
                </GreenText>
              </Title>
              <div className={classnames.card}>
                <Text
                  dangerouslySetInnerHTML={{
                    __html: t('landing:mainQuestions.token.text'),
                  }}
                />
              </div>
              <Image
                // style={{ margin: 'auto' }}
                style={{
                  aspectRatio: '16/9',
                  objectFit: 'cover',
                }}
                src="/images/landing/nft-3.png"
                width={700}
                height={700}
                alt="main-questions"
              />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default MainQuestions;
