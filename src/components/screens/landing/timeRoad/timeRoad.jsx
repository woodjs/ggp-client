import { useTranslation } from 'next-i18next';
import { Container } from '@/components/screens/landing/Container';
import Image from 'next/image';
// import { Title } from '@/components/screens/landing/Title';
import { GreenText } from '@/components/screens/landing/GreenText';
import { Text } from '@/components/screens/landing/Text';
import styles from './timeRoad.module.css';
import { Title } from '../Title';

function TimeRoad() {
  const { t } = useTranslation();
  return (
    <Container style={{ overflow: 'hidden' }}>
      <Title className={styles.title}>{t('landing:timeRoad.title')}</Title>
      <div className={styles.timeRoad}>
        {/* <Image
          className={styles.hideOnMobile}
          style={{
            position: 'absolute',
            zIndex: '1',
            top: '-150px',
            left: '30%',
            transform: 'rotate(-20deg) scaleX(-1)',
          }}
          src="/images/promo-modal/expansion/pine3.png"
          alt="pine"
          width={280}
          height={240}
        /> */}
        <Image
          className={styles.showOnMobile}
          style={{
            position: 'absolute',
            zIndex: '1',
            top: '-200px',
            right: '-120px',
            transform: 'rotate(20deg)',
          }}
          src="/images/promo-modal/expansion/pine3.png"
          alt="pine"
          width={280}
          height={240}
        />
        {/* <Image
          src="/images/promo-modal/expansion/sideLights.svg"
          width={200}
          height={1200}
          style={{
            position: 'absolute',
            zIndex: '0',
            top: '-230px',
            left: '60%',
            transform: 'rotate(110deg)',
          }}
          className={styles.hideOnMobile}
        /> */}
        <Image
          src="/images/promo-modal/expansion/sideLights.svg"
          width={200}
          height={1200}
          style={{
            position: 'absolute',
            zIndex: '0',
            top: '-230px',
            left: '80%',
          }}
          className={styles.showOnMobile}
        />
        {/* <Title>{t('landing:timeRoad.title')} </Title> */}
        <div className={styles.timeRoad_wrap}>
          <div
            className={`${styles.timeRoad__item} ${styles.timeRoad__item_left}`}
          >
            <Text className={styles.timeRoad__title}>
              <GreenText shadow>{t('landing:timeRoad.item-1')}</GreenText>
            </Text>
            <div className={styles.timeRoad__line} />
            <ul className={styles.timeRoad__info}>
              <li>
                <Text>{t('landing:timeRoad.item-1.list-1')}</Text>
              </li>
            </ul>
          </div>
          <div
            className={`${styles.timeRoad__item} ${styles.timeRoad__item_right}`}
          >
            <Text className={styles.timeRoad__title}>
              <GreenText shadow>{t('landing:timeRoad.item-2')}</GreenText>
            </Text>
            <div className={styles.timeRoad__line} />
            <ul className={styles.timeRoad__info}>
              <li>
                <Text>{t('landing:timeRoad.item-2.list-1')}</Text>
              </li>
            </ul>
          </div>
          <div
            className={`${styles.timeRoad__item} ${styles.timeRoad__item_left}`}
          >
            <Text className={styles.timeRoad__title}>
              <GreenText shadow>{t('landing:timeRoad.item-3')}</GreenText>
            </Text>
            <div className={styles.timeRoad__line} />
            <ul className={styles.timeRoad__info}>
              <li>
                <Text>{t('landing:timeRoad.item-3.list-1')}</Text>
              </li>
              <li>
                <Text>{t('landing:timeRoad.item-3.list-2')}</Text>
              </li>
              <li>
                <Text>{t('landing:timeRoad.item-3.list-3')}</Text>
              </li>
            </ul>
          </div>
          <div
            className={`${styles.timeRoad__item} ${styles.timeRoad__item_right}`}
          >
            <Text className={styles.timeRoad__title}>
              <GreenText shadow>{t('landing:timeRoad.item-4')}</GreenText>
            </Text>
            <div className={styles.timeRoad__line} />
            <ul className={styles.timeRoad__info}>
              <li>
                <Text>{t('landing:timeRoad.item-4.list-1')}</Text>
              </li>
              <li>
                <Text>{t('landing:timeRoad.item-4.list-2')}</Text>
              </li>
              <li>
                <Text>{t('landing:timeRoad.item-4.list-3')}</Text>
              </li>
            </ul>
          </div>
          <div
            className={`${styles.timeRoad__item} ${styles.timeRoad__item_left}`}
          >
            <Text className={styles.timeRoad__title}>
              <GreenText shadow>{t('landing:timeRoad.item-5')}</GreenText>
            </Text>
            <div className={styles.timeRoad__line} />
            <ul className={styles.timeRoad__info}>
              <li>
                <Text>{t('landing:timeRoad.item-5.list-1')}</Text>
              </li>
              <li>
                <Text>{t('landing:timeRoad.item-5.list-2')}</Text>
              </li>
            </ul>
          </div>
          <div
            className={`${styles.timeRoad__item} ${styles.timeRoad__item_right}`}
          >
            <Text className={styles.timeRoad__title}>
              <GreenText shadow>{t('landing:timeRoad.item-6')}</GreenText>
            </Text>
            <div className={styles.timeRoad__line} />
            <ul className={styles.timeRoad__info}>
              <li>
                <Text>{t('landing:timeRoad.item-6.list-1')}</Text>
              </li>
              <li>
                <Text>{t('landing:timeRoad.item-6.list-2')}</Text>
              </li>
            </ul>
          </div>

          <div
            className={`${styles.timeRoad__item} ${styles.timeRoad__item_left}`}
          >
            <Text className={styles.timeRoad__title}>
              <GreenText shadow>{t('landing:timeRoad.item-7')}</GreenText>
            </Text>
            <div className={styles.timeRoad__line} />
            <ul className={styles.timeRoad__info}>
              <li>
                <Text>{t('landing:timeRoad.item-7.list-1')}</Text>
              </li>
              <li>
                <Text>{t('landing:timeRoad.item-7.list-2')}</Text>
              </li>
              <li>
                <Text>{t('landing:timeRoad.item-7.list-3')}</Text>
              </li>
            </ul>
          </div>

          <div
            className={`${styles.timeRoad__item} ${styles.timeRoad__item_right}`}
          >
            <Text className={styles.timeRoad__title}>
              <GreenText shadow>{t('landing:timeRoad.item-8')}</GreenText>
            </Text>
            <div className={styles.timeRoad__line} />
            <ul className={styles.timeRoad__info}>
              <li>
                <Text>{t('landing:timeRoad.item-8.list-1')}</Text>
              </li>
              <li>
                <Text>{t('landing:timeRoad.item-8.list-2')}</Text>
              </li>
              <li>
                <Text>{t('landing:timeRoad.item-8.list-3')}</Text>
              </li>
            </ul>
          </div>

          <div
            className={`${styles.timeRoad__item} ${styles.timeRoad__item_left}`}
          >
            <Text className={styles.timeRoad__title}>
              <GreenText shadow>{t('landing:timeRoad.item-9')}</GreenText>
            </Text>
            <div className={styles.timeRoad__line} />
            <ul className={styles.timeRoad__info}>
              <li>
                <Text>{t('landing:timeRoad.item-9.list-1')}</Text>
              </li>
              <li>
                <Text>{t('landing:timeRoad.item-9.list-2')}</Text>
              </li>
              <li>
                <Text>{t('landing:timeRoad.item-9.list-3')}</Text>
              </li>
            </ul>
          </div>
          <div
            className={`${styles.timeRoad__item} ${styles.timeRoad__item_right}`}
          >
            <Text className={styles.timeRoad__title}>
              <GreenText shadow>{t('landing:timeRoad.item-10')}</GreenText>
            </Text>
            <div className={styles.timeRoad__line} />
            <ul className={styles.timeRoad__info}>
              <li>
                <Text>{t('landing:timeRoad.item-10.list-1')}</Text>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default TimeRoad;
