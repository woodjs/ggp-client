import { useTranslation } from 'next-i18next';
import { Button } from '../Button';
import { Container } from '../Container';
import { GreenText } from '../GreenText';
import { Title } from '../Title';
import classnames from './aboutTokenomic.module.css';

function AboutTokenomic({ onToggle, isOpen }) {
  const { t } = useTranslation();
  return (
    <div className={classnames.image}>
      <Container className={classnames.container}>
        <Title style={{ textAlign: 'center', width: '100%' }}>
          <GreenText>{t('landing:aboutTokenomic.title')}</GreenText>
        </Title>
        <Button onClick={onToggle}>
          {isOpen
            ? t('landing:aboutTokenomic.button-close')
            : t('landing:aboutTokenomic.button')}
        </Button>
      </Container>
    </div>
  );
}

export default AboutTokenomic;
