import { useTranslation } from 'next-i18next';
import { Container } from '@/components/screens/landing/Container';
import { SocialList } from '@/components/screens/landing/SocialList';
import styles from './footer.module.css';

function scrollToId(id, block = 'center') {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block });
  }
}

function Footer() {
  const { t } = useTranslation();
  return (
    <Container>
      <div className={styles.footer__wrap}>
        <img
          className={styles.footer__logo}
          src="/images/landing/hero-logo.svg"
          alt="logo"
        />
        <div className={styles.footer__list}>
          {/* <button
            type="button"
            onClick={() => scrollToId('checkNFT', 'start')}
            className={styles.footer__link}
          >
            {t('landing:menu.checkNFT')}
          </button> */}
          <button
            type="button"
            onClick={() => scrollToId('invests', 'start')}
            className={styles.footer__link}
          >
            {t('landing:menu.invests')}
          </button>
          <button
            type="button"
            onClick={() => scrollToId('ceo')}
            className={styles.footer__link}
          >
            {t('landing:menu.ceo')}
          </button>
          <button
            type="button"
            onClick={() => scrollToId('roadmap', 'start')}
            className={styles.footer__link}
          >
            {t('landing:menu.roadmap')}
          </button>
          {/* <button
            type="button"
            onClick={() => scrollToId('tokenomic', 'start')}
            className={styles.footer__link}
          >
            {t('landing:menu.tokenomic')}
          </button> */}
          <button
            type="button"
            onClick={() => {
              window.dataLayer = window.dataLayer || [];
              window.dataLayer.push({
                event: 'event',
                eventCategory: 'footer',
                eventAction: 'white_paper',
              });

              window.open(t('landing:menu.whitePaperLink', '_blank'));
            }}
            className={styles.footer__link}
          >
            {t('landing:menu.whitePaper')}
          </button>
          {/* <button className={styles.footer__link}>
            {t('landing:menu.faq')}
          </button> */}
        </div>
        <SocialList className={styles.footer__social} direction="row" />
      </div>
      <div className={styles.footer__copy}>&copy; {t('landing:copyright')}</div>
    </Container>
  );
}

export default Footer;
