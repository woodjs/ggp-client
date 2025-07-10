import { useTranslation } from 'next-i18next';
import { Container } from '@/components/screens/landing/Container';
import { Title } from '@/components/screens/landing/Title';
import { GreenText } from '@/components/screens/landing/GreenText';
import { Text } from '@/components/screens/landing/Text';
import { Circle } from '@/components/screens/landing/Circle';
import styles from './extra.module.css';

function Extra() {
  const { t } = useTranslation();
  return (
    <Container>
      <div className={styles.extra}>
        <Title className={styles.title}>
          {t('landing:extra.title')}
          <GreenText shadow> {t('landing:extra.title.green')}</GreenText>
        </Title>
        <div className={styles.extra__sub}>
          <Text className={styles.extra__text}>
            {t('landing:extra.subtitle')}
          </Text>
        </div>
        <div className={styles.extra__wrap}>
          <div className={styles.extra__item}>
            <div className={styles.extra__item_title}>
              <Circle className={styles.extra__point} />
              {t('landing:extra.item-1.title')}
            </div>
            <Text>{t('landing:extra.item-1')}</Text>
          </div>
          <div className={styles.extra__item}>
            <div className={styles.extra__item_title}>
              <Circle className={styles.extra__point} />
              {t('landing:extra.item-2.title')}
            </div>
            <Text>{t('landing:extra.item-2')}</Text>
          </div>
          <div className={styles.extra__item}>
            <div className={styles.extra__item_title}>
              <Circle className={styles.extra__point} />
              {t('landing:extra.item-3.title')}
            </div>
            <Text>{t('landing:extra.item-3')}</Text>
          </div>
          <div className={styles.extra__item}>
            <div className={styles.extra__item_title}>
              <Circle className={styles.extra__point} />
              {t('landing:extra.item-4.title')}
            </div>
            <Text>{t('landing:extra.item-4')}</Text>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Extra;
