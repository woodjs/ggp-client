import { useTranslation } from 'next-i18next';
import {
  DiscordIcon,
  InstagramIcon,
  TelegramIcon,
  TwitterIcon,
  YouTubeIcon,
} from '../Icons/SocialIcons';
import classnames from './SocialList.module.css';

/**
 * @typedef {Object} SocialListProps
 * @property {"column" | "row" | "column-reverse" | "row-reverse"} direction
 * @param {SocialListProps} props
 * @returns {JSX.Element}
 */
function SocialList({
  className = '',
  direction = 'column',
  style,
  isYellow,
  isLight,
}) {
  const { t } = useTranslation();
  return (
    <div
      data-is-light={isLight}
      className={`${classnames['social-list']} ${className} ${
        isYellow ? classnames['social-list-yellow'] : ''
      }`}
      style={{ ...style, flexDirection: direction }}
    >
      <a
        href={t('landing:instagram')}
        target="_blank"
        rel="noreferrer"
        className={classnames.link}
        aria-label={t('landing:instagram')}
      >
        <InstagramIcon isYellow={isYellow} />
        <span
          style={{
            position: 'absolute',
            left: '-10000px',
            top: 'auto',
            width: '1px',
            height: '1px',
            overflow: 'hidden',
          }}
        >
          {t('landing:instagram')}
        </span>
      </a>
      <a
        href={t('landing:twitter')}
        target="_blank"
        rel="noreferrer"
        className={classnames.link}
        aria-label={t('landing:twitter')}
      >
        <TwitterIcon isYellow={isYellow} />
      </a>
      <a
        href="https://t.me/+c8Yio4WxA5E5ODZi"
        target="_blank"
        rel="noreferrer"
        className={classnames.link}
        aria-label={t('landing:telegram')}
      >
        <TelegramIcon isYellow={isYellow} />
      </a>
      {/* <a
        href={t('landing:discord')}
        target="_blank"
        rel="noreferrer"
        className={classnames.link}
      >
        <DiscordIcon isYellow={isYellow} />
      </a> */}
      <a
        href={t('landing:youtube')}
        target="_blank"
        rel="noreferrer"
        className={classnames.link}
        aria-label={t('landing:youtube')}
      >
        <YouTubeIcon isYellow={isYellow} />
      </a>
    </div>
  );
}

export default SocialList;
