import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import Image from 'next/image';
import { Button } from '../Button';
import { Container } from '../Container';
import { GreenText } from '../GreenText';
import { Title } from '../Title';
import classnames from './tokenomicHow.module.css';
import pointImage1 from '../../../../../public/images/landing/how-1.png';
import pointImage2 from '../../../../../public/images/landing/how-2.png';

function BenefitsCard({ title, text }) {
  const [isOpen, setIsOpen] = useState(false);
  const openHandler = () => {
    setIsOpen(!isOpen);
  };
  const ref = useRef();
  return (
    <div className={classnames.benefitsCard}>
      <div className={classnames.benefitsCardContainer}>
        <div className={classnames.benefitsCardTitle}>{title}</div>
        <div
          ref={ref}
          style={{ maxHeight: isOpen ? ref.current.scrollHeight : 0 }}
          className={`${classnames.benefitsCardText} ${
            isOpen ? classnames.benefitsCardTextOpen : ''
          }`}
          dangerouslySetInnerHTML={{
            __html: text,
          }}
        />
        <div
          className={`${classnames.benefitsCardTextDesctop}`}
          dangerouslySetInnerHTML={{
            __html: text,
          }}
        />
      </div>
      <button
        type="button"
        onClick={openHandler}
        className={classnames.benefitsCardButton}
      >
        <FiChevronDown
          className={`${classnames.benefitsCardIcon} ${
            isOpen ? classnames.benefitsCardIconOpen : ''
          }`}
        />
      </button>
    </div>
  );
}

function TokenomicHow() {
  const { t } = useTranslation('landing');
  return (
    <div className={classnames.wrapper}>
      <Container>
        <Title className={classnames.title}>
          <GreenText>{t('tokenomicHow.title-green')}</GreenText>{' '}
          {t('tokenomicHow.title')}
        </Title>
        <div className={classnames.container}>
          <div className={classnames.point}>
            <div className={classnames.circleWrapper}>
              <div className={classnames.circle} />
              <Image
                className={classnames.pointImage1}
                src={pointImage1}
                alt="tokenomic-how-1"
              />
            </div>
            <div>
              <div className={classnames.pointTitle}>
                {t('tokenomicHow.point.title-1')}{' '}
                <GreenText>{t('tokenomicHow.point.title-green')}</GreenText>{' '}
                {t('tokenomicHow.point.title-2')}
              </div>
              <div
                className={classnames.pointText}
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{
                  __html: t('tokenomicHow.point.text'),
                }}
              />
            </div>
          </div>
          <div className={classnames.card}>
            <Image
              width={300}
              height={300}
              className={classnames.coin1}
              src="/images/landing/coin-1.png"
              alt="tokenomic-coin-1"
            />
            <Image
              width={300}
              height={300}
              className={classnames.coin3}
              src="/images/landing/coin-3.png"
              alt="tokenomic-coin-3"
            />
            <div className={classnames.cardTitle}>
              <Image
                width={300}
                height={300}
                className={classnames.coin2}
                src="/images/landing/coin-2.png"
                alt="tokenomic-coin-2"
              />
              <GreenText>{t('tokenomicHow.card.title')}</GreenText>
            </div>
            <div
              className={classnames.cardText}
              dangerouslySetInnerHTML={{
                __html: t('tokenomicHow.card.text'),
              }}
            />
          </div>
          <div className={classnames.signup}>
            <div className={classnames.signupTitle}>
              <GreenText>{t('tokenomicHow.signup.title')}</GreenText>
            </div>
            <Link href="/auth/register">
              <Button>{t('tokenomicHow.signup.button')}</Button>
            </Link>
          </div>
          <div className={classnames.benefits}>
            <div className={classnames.benefitsTitle}>
              {t('tokenomicHow.benefits.title')}
            </div>
            <div className={classnames.benefitsText}>
              {t('tokenomicHow.benefits.subtitle')}
            </div>
            <div className={classnames.benefitsVStack}>
              <div className={classnames.benefitsGrid}>
                <BenefitsCard
                  title={t('tokenomicHow.benefits.card.title')}
                  text={t('tokenomicHow.benefits.card.text')}
                />
                <BenefitsCard
                  title={t('tokenomicHow.benefits.card.title-2')}
                  text={t('tokenomicHow.benefits.card.text-2')}
                />
                <BenefitsCard
                  title={t('tokenomicHow.benefits.card.title-3')}
                  text={t('tokenomicHow.benefits.card.text-3')}
                />
                <BenefitsCard
                  title={t('tokenomicHow.benefits.card.title-4')}
                  text={t('tokenomicHow.benefits.card.text-4')}
                />
              </div>
              <div className={classnames.benefitsHStack}>
                <BenefitsCard
                  title={t('tokenomicHow.benefits.card.title-5')}
                  text={t('tokenomicHow.benefits.card.text-5')}
                />
                <BenefitsCard
                  title={t('tokenomicHow.benefits.card.title-6')}
                  text={t('tokenomicHow.benefits.card.text-6')}
                />
              </div>
            </div>
          </div>
          <div className={classnames.point2}>
            <div className={classnames.circleWrapper}>
              <div className={classnames.circle} />
              <Image
                className={classnames.pointImage2}
                src={pointImage2}
                alt="tokenomic-how-2"
              />
            </div>
            <div>
              <div className={classnames.pointTitle}>
                {t('tokenomicHow.point.title-1')}{' '}
                <GreenText>{t('tokenomicHow.point.title-2-green')}</GreenText>{' '}
                {t('tokenomicHow.point.title-2')}
              </div>
              <div className={classnames.pointText}>
                {t('tokenomicHow.point.text-2')}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default TokenomicHow;
