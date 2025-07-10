import { Container } from '@/components/screens/landing/Container';
import { Title } from '@/components/screens/landing/Title';
import { GreenText } from '@/components/screens/landing/GreenText';
import { Button } from '@/components/screens/landing/Button';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { useTranslation } from 'next-i18next';

import styles from './Media.module.css';
import 'swiper/css';
import 'swiper/css/navigation';

export default function Media() {
  const { t, i18n } = useTranslation();
  const news = [
    {
      name: t('landing:media.text-1'),
      image: '/images/landing/media/forbes.png',
      link: 'https://blogs.forbes.ru/2020/02/12/pribylno-v-rossii-mozhno-li-zarabotat-esli-biznes-svjazan-s-proizvodstvom/',
    },
    {
      name: t('landing:media.text-2'),
      image: '/images/landing/media/rbk.svg',
      link: 'https://pro.rbc.ru/demo/5d66757d9a79474c05cb53f6\n',
    },
    {
      name: t('landing:media.text-3'),
      image: '/images/landing/media/tass.svg',
      link: 'https://tass.ru/msp/6716749',
    },
    {
      name: t('landing:media.text-4'),
      image: '/images/landing/media/expert.svg',
      link: 'https://expert.ru/expert/2020/11/svoi-v-dosku/',
    },
    {
      name: t('landing:media.text-5'),
      image: '/images/landing/media/rb.svg',
      link: 'https://rb.ru/opinion/rabota-s-marketplejsami/',
    },
    {
      name: t('landing:media.text-6'),
      image: '/images/landing/media/vc.png',
      link: 'https://vc.ru/story/82552-zarabatyvat-milliony-rubley-v-mesyac-na-proizvodstve-fingerbordov-progoret-v-krizis-i-nayti-novuyu-nishu',
    },
    {
      langauges: ['ru'],
      name: t('landing:media.text-7'),
      image: '/images/landing/media/chech.svg',
      link: 'http://www.checheninfo.ru/214000-chechnja-minturizma-chechni-i-trb-grupp-dogovorilis-o-sotrudnichestve.html',
    },
  ];
  function formatingNews() {
    const lang = i18n.language;
    return news.filter((item) => {
      if (item.langauges) {
        return item.langauges.includes(lang);
      }
      return true;
    });
  }
  const newsFormated = formatingNews();
  return (
    <Container>
      <div className={styles.wrap}>
        <Title className={styles.title}>
          {t('landing:media-title')}{' '}
          <GreenText>{t('landing:media-title-green')}</GreenText>
        </Title>
        <Swiper navigation modules={[Navigation]} autoplay slidesPerView={1}>
          {newsFormated.map((newsItem) => (
            <SwiperSlide key={newsItem.link} className={styles.slide}>
              <div className={styles.news}>
                <img
                  className={styles.news_img}
                  src={newsItem.image}
                  alt="news"
                />
                <div className={styles.news_title}>{newsItem.name}</div>
                <a href={newsItem.link}>
                  <Button>{t('landing:media-btn')}</Button>
                </a>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Container>
  );
}
