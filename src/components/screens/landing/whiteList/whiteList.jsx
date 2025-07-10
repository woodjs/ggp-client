import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { Button } from '../Button';
import { Container } from '../Container';
import { GreenText } from '../GreenText';
import { Text } from '../Text';
import { Title } from '../Title';
import classnames from './whiteList.module.css';

function WhiteList() {
  const { t } = useTranslation();
  return (
    <Container>
      <div className={classnames.container}>
        <img
          className={classnames.image}
          src="/images/landing/white-list.png"
          alt="whiteList"
        />
        <div className={classnames.content}>
          <Title className={classnames.text}>
            {t('landing:whitelist.title')}
            <GreenText shadow> {t('landing:whitelist.title-green')}</GreenText>
          </Title>
          <Text className={classnames.text}>{t('landing:whitelist.text')}</Text>
          <Link href="/auth/register">
            <Button>{t('landing:whitelist.button')}</Button>
          </Link>
        </div>
      </div>
    </Container>
  );
}

export default WhiteList;
