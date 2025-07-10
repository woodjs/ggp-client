import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import { Button } from '../Button';
import { GreenText } from '../GreenText';
import classnames from './CheckNFT.module.css';

function CheckNFT() {
  const { t } = useTranslation('landing');
  const [inputValue, setInputValue] = useState('');
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleCheckNFT = () => {
    // eslint-disable-next-line no-console
    console.log('Check NFT', inputValue);
  };
  return (
    <div className={classnames.card}>
      <div className={classnames.stack}>
        <div className={classnames.title}>
          <GreenText className={classnames.nowrap}>
            {t('checkNFT.title-green')}{' '}
          </GreenText>
          <br className={classnames.br} />
          <span className={classnames.nowrap}>{t('checkNFT.title')}</span>
        </div>
        <div className={classnames.HStack}>
          <input
            onChange={handleInputChange}
            value={inputValue}
            className={classnames.input}
            type="text"
            placeholder={t('checkNFT.placeholder')}
          />
          <Button
            onClick={handleCheckNFT}
            classname={classnames.button}
            variant="outline"
          >
            {t('checkNFT.button')}
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CheckNFT;
