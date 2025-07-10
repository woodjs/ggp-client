import { useTranslation } from 'next-i18next';
import { Container } from '../Container';
import { GreenText } from '../GreenText';
import { Text } from '../Text';
import { Title } from '../Title';
import classnames from './teamNFT.module.css';

function TeamNFT() {
  const { t } = useTranslation();
  return (
    <Container>
      <Title style={{ marginBottom: '70px', marginTop: '90px' }}>
        {t('landing:teamNFT.title')}
      </Title>
      <div className={classnames.stack}>
        <div className={classnames.HStack}>
          <div className={classnames.circle} />
          <Text className={classnames.point}>
            <GreenText>Weed-NFT</GreenText>
          </Text>
        </div>
        <div className={classnames.HStack}>
          <div className={classnames.circle} />
          <Text className={classnames.point}>
            <GreenText>Saft-NFT</GreenText>
          </Text>
        </div>
        <div className={classnames.HStack}>
          <div className={classnames.circle} />
          <Text className={classnames.point}>
            <GreenText>{t('landing:teamNFT.collection')} NFT</GreenText>
          </Text>
        </div>
      </div>
    </Container>
  );
}

export default TeamNFT;
