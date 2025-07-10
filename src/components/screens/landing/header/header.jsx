import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import Link from 'next/link';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import { Button } from '../Button';
import { Container } from '../Container';
import LangaugeSelect from '../LangaugeSelect/LangaugeSelect';
import { Text } from '../Text';
import classnames from './header.module.css';

function scrollToId(id, block = 'center') {
  const element = document.getElementById(id);

  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block });
  } else {
    window.location.href = `/#${id}`;
  }
}
function Header({ sections, isYellow, isLight }) {
  const { t } = useTranslation();

  const getLogo = () => {
    if (isYellow) {
      return '/images/full-logo-yellow.svg';
    }
    if (isLight) {
      return '/images/landing/hero-logo-light.svg';
    }
    return '/images/landing/hero-logo.svg';
  };

  return (
    <div
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 3,
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        backgroundColor: isLight
          ? 'rgba(255, 255, 255, 0.5)'
          : 'rgba(0, 0, 0, 0.7)',
      }}
    >
      <Container>
        <div className={classnames.container}>
          <div className={classnames.langauge}>
            <LangaugeSelect isLight={isLight} isYellow={isYellow} />
          </div>
          <Image
            className={classnames.image}
            src={getLogo()}
            alt="logo profit on weed"
            width={100}
            height={60}
          />
          <div className={classnames.list}>
            {/* <button
              className={classnames.item}
              type="button"
              onClick={() => scrollToId('checkNFT', 'start')}
            >
             <Text 
                data-is-light={isLight}
                className={`${classnames.text} ${
                  sections?.checkNFT
                    ? classnames['selected-link']
                    : classnames['unselected-link']
                }`}
              >
                {t('landing:menu.checkNFT')}
              </Text>
            </button> */}
            <button
              className={classnames.item}
              type="button"
              onClick={() => scrollToId('ceo')}
            >
              <Text
                data-is-light={isLight}
                className={`${classnames.text} ${
                  sections?.ceo
                    ? classnames['selected-link']
                    : classnames['unselected-link']
                }`}
              >
                {t('landing:menu.ceo')}
              </Text>
            </button>
            <button
              className={classnames.item}
              type="button"
              onClick={() => scrollToId('invests', 'start')}
            >
              <Text
                data-is-light={isLight}
                className={`${classnames.text} ${
                  sections?.invests
                    ? classnames['selected-link']
                    : classnames['unselected-link']
                }`}
              >
                {t('landing:menu.invests')}
              </Text>
            </button>
            <button
              className={classnames.item}
              type="button"
              onClick={() => scrollToId('roadmap', 'start')}
            >
              <Text
                data-is-light={isLight}
                className={`${classnames.text} ${
                  sections?.roadmap
                    ? classnames['selected-link']
                    : classnames['unselected-link']
                }`}
              >
                {t('landing:menu.roadmap')}
              </Text>
            </button>
            {/* <button
              className={classnames.item}
              type="button"
              onClick={() => scrollToId('tokenomic', 'start')}
            >
              <Text
                data-is-light={isLight}
                className={`${classnames.text} ${
                  sections?.tokenomic
                    ? classnames['selected-link']
                    : classnames['unselected-link']
                }`}
              >
                {t('landing:menu.tokenomic')}
              </Text>
            </button>{' '} */}
            {/* <button
              className={classnames.item}
              type="button"
              onClick={() => {
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({
                  event: 'event',
                  eventCategory: 'menu',
                  eventAction: 'white_paper',
                });

                window.open(t('landing:menu.whitePaperLink'));
              }}
            >
              <Text data-is-light={isLight} className={`${classnames.text}`}>
                {t('landing:menu.whitePaper')}
              </Text>
            </button */}
            {/* <button
              className={classnames.item}
              type="button"
              onClick={() => scrollToId('faq')}
            >
             <Text 
                data-is-light={isLight}
                className={`${classnames.text} ${
                  sections?.faq
                    ? classnames['selected-link']
                    : classnames['unselected-link']
                }`}
              >
                {t('landing:menu.faq')}
              </Text>
            </button> */}
          </div>
          <div className={classnames.buttons}>
            <LangaugeSelect isLight={isLight} isYellow={isYellow} />
            <Link href="/auth/register">
              <Button
                classname={classnames.button}
                style={{
                  backgroundColor: isYellow ? '#FFDC3F' : 'var(--green)',
                  color: isLight ? 'white' : 'var(--dark)',
                  padding: '10px',
                }}
              >
                {t('landing:header.register')}
              </Button>
            </Link>
            <Link href="/auth/login">
              <Button
                classname={classnames.button}
                variant="outline"
                style={{
                  borderColor: isYellow ? '#FFDC3F' : 'var(--green)',
                  color: isYellow ? '#FFDC3F' : 'var(--green)',
                  padding: '10px 20px',
                }}
              >
                {t('landing:header.login')}
              </Button>
            </Link>
          </div>
          <div className={classnames.burger}>
            <BurgerMenu isLight={isLight}>
              {({ onClose }) => (
                <div className={classnames.mobilelist}>
                  {/* <button
                    className={classnames.item}
                    type="button"
                    onClick={() => {
                      onClose();
                      scrollToId('checkNFT', 'start');
                    }}
                  >
                   <Text 
                data-is-light={isLight}
                      className={`${classnames.text} ${
                        sections?.checkNFT
                          ? classnames['selected-link']
                          : classnames['unselected-link']
                      }`}
                    >
                      {t('landing:menu.checkNFT')}
                    </Text>
                  </button> */}
                  <button
                    className={classnames.item}
                    type="button"
                    onClick={() => {
                      onClose();
                      scrollToId('ceo');
                    }}
                  >
                    <Text
                      data-is-light={isLight}
                      className={`${classnames.text} ${
                        sections?.ceo
                          ? classnames['selected-link']
                          : classnames['unselected-link']
                      }`}
                    >
                      {t('landing:menu.ceo')}
                    </Text>
                  </button>
                  <button
                    className={classnames.item}
                    type="button"
                    onClick={() => {
                      onClose();
                      scrollToId('invests', 'start');
                    }}
                  >
                    <Text
                      data-is-light={isLight}
                      className={`${classnames.text} ${
                        sections?.invests
                          ? classnames['selected-link']
                          : classnames['unselected-link']
                      }`}
                    >
                      {t('landing:menu.invests')}
                    </Text>
                  </button>
                  <button
                    className={classnames.item}
                    type="button"
                    onClick={() => {
                      onClose();
                      scrollToId('roadmap', 'start');
                    }}
                  >
                    <Text
                      data-is-light={isLight}
                      className={`${classnames.text} ${
                        sections?.roadmap
                          ? classnames['selected-link']
                          : classnames['unselected-link']
                      }`}
                    >
                      {t('landing:menu.roadmap')}
                    </Text>
                  </button>
                  {/* <button
                    className={classnames.item}
                    type="button"
                    onClick={() => {
                      onClose();
                      scrollToId('tokenomic', 'start');
                    }}
                  >
                    <Text
                      data-is-light={isLight}
                      className={`${classnames.text} ${
                        sections?.tokenomic
                          ? classnames['selected-link']
                          : classnames['unselected-link']
                      }`}
                    >
                      {t('landing:menu.tokenomic')}
                    </Text> 
                  </button> */}
                  {/* <button
                    className={classnames.item}
                    type="button"
                    onClick={() => {
                      onClose();
                      window.dataLayer = window.dataLayer || [];
                      window.dataLayer.push({
                        event: 'event',
                        eventCategory: 'menu',
                        eventAction: 'white_paper',
                      });

                      window.open(t('landing:menu.whitePaperLink'));
                    }}
                  >
                    <Text
                      data-is-light={isLight}
                      className={`${classnames.text}`}
                    >
                      {t('landing:menu.whitePaper')}
                    </Text>
                  </button> */}
                  {/* <button
                    className={classnames.item}
                    type="button"
                    onClick={() => {
                      onClose();
                      scrollToId('partner');
                    }}
                  >
                   <Text 
                data-is-light={isLight}
                      className={`${classnames.text} ${
                        sections?.partner
                          ? classnames['selected-link']
                          : classnames['unselected-link']
                      }`}
                    >
                      {t('landing:menu.partnership')}
                    </Text>
                  </button> */}
                  {/* <button
                    className={classnames.item}
                    type="button"
                    onClick={() => {
                      onClose();
                      scrollToId('faq');
                    }}
                  >
                   <Text 
                data-is-light={isLight}
                      className={`${classnames.text} ${
                        sections?.faq
                          ? classnames['selected-link']
                          : classnames['unselected-link']
                      }`}
                    >
                      {t('landing:menu.faq')}
                    </Text>
                  </button> */}
                  {/* <div className={classnames.burgerLagnaugeSelect}>
                    <LangaugeSelect isLight={isLight} />
                  </div> */}
                  <Link href="/auth/register">
                    <Button
                      classname={classnames.button}
                      style={{
                        maxWidth: '240px',
                        width: '100%',
                        backgroundColor: isYellow ? '#FFDC3F' : 'var(--green)',
                        color: isLight ? 'white' : 'var(--dark)',
                      }}
                    >
                      {t('landing:header.register')}
                    </Button>
                  </Link>
                  <Link href="/auth/login">
                    <Button
                      classname={classnames.button}
                      variant="outline"
                      style={{
                        maxWidth: '240px',
                        width: '100%',
                        borderColor: isYellow ? '#FFDC3F' : 'var(--green)',
                        color: isYellow ? '#FFDC3F' : 'var(--green)',
                      }}
                    >
                      {t('landing:header.login')}
                    </Button>
                  </Link>
                </div>
              )}
            </BurgerMenu>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Header;
