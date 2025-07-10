import { useTranslation } from 'next-i18next';
import { Container } from '../Container';
import { GreenText } from '../GreenText';
import { Text } from '../Text';
import { Title } from '../Title';
import classnames from './tokenomicDistribution.module.css';

function TokenomicDistribution() {
  const { t } = useTranslation('landing');

  return (
    <Container>
      <Title className={classnames.title}>
        <GreenText> {t('tokenomicDistribution.title-green-1')}</GreenText>{' '}
        {t('tokenomicDistribution.title-1')}{' '}
        <GreenText>{t('tokenomicDistribution.title-green-2')}</GreenText>{' '}
        {t('tokenomicDistribution.title-2')}
      </Title>
      <Text className={classnames.text}>{t('tokenomicDistribution.text')}</Text>
      <div className={classnames.tableWrapper}>
        <table className={classnames.table}>
          <thead>
            <tr>
              <th>{t('tokenomicDistribution.table.col-1.title')}</th>
              <th>{t('tokenomicDistribution.table.col-2.title')}</th>
              <th>{t('tokenomicDistribution.table.col-3.title')}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{t('tokenomicDistribution.table.col-1.text-1')}</td>
              <td>{t('tokenomicDistribution.table.col-2.text-1')}</td>
              <td>{t('tokenomicDistribution.table.col-3.text-3')}</td>
            </tr>
            <tr>
              <td>{t('tokenomicDistribution.table.col-1.text-2')}</td>
              <td>{t('tokenomicDistribution.table.col-2.text-2')}</td>
              <td>{t('tokenomicDistribution.table.col-3.text-2')}</td>
            </tr>
            <tr>
              <td>{t('tokenomicDistribution.table.col-1.text-3')}</td>
              <td>{t('tokenomicDistribution.table.col-2.text-3')}</td>
              <td>{t('tokenomicDistribution.table.col-3.text-3')}</td>
            </tr>
            <tr>
              <td>{t('tokenomicDistribution.table.col-1.text-4')}</td>
              <td>{t('tokenomicDistribution.table.col-2.text-4')}</td>
              <td>{t('tokenomicDistribution.table.col-3.text-4')}</td>
            </tr>
            <tr>
              <td>{t('tokenomicDistribution.table.col-1.text-5')}</td>
              <td>{t('tokenomicDistribution.table.col-2.text-5')}</td>
              <td>{t('tokenomicDistribution.table.col-3.text-5')}</td>
            </tr>
            <tr>
              <td>{t('tokenomicDistribution.table.col-1.text-6')}</td>
              <td>{t('tokenomicDistribution.table.col-2.text-6')}</td>
              <td>{t('tokenomicDistribution.table.col-3.text-6')}</td>
            </tr>
            <tr>
              <td>{t('tokenomicDistribution.table.col-1.text-7')}</td>
              <td>{t('tokenomicDistribution.table.col-2.text-7')}</td>
              <td />
            </tr>
          </tbody>
        </table>
        <table className={classnames.tableMobile}>
          <thead>
            <tr>
              <th>{t('tokenomicDistribution.table.col-1.title')}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{t('tokenomicDistribution.table.col-1.text-1')}</td>
            </tr>
            <tr>
              <td>{t('tokenomicDistribution.table.col-1.text-2')}</td>
            </tr>
            <tr>
              <td>{t('tokenomicDistribution.table.col-1.text-3')}</td>
            </tr>
            <tr>
              <td>{t('tokenomicDistribution.table.col-1.text-4')}</td>
            </tr>
            <tr>
              <td>{t('tokenomicDistribution.table.col-1.text-5')}</td>
            </tr>
            <tr>
              <td>{t('tokenomicDistribution.table.col-1.text-6')}</td>
            </tr>
            <tr>
              <td>{t('tokenomicDistribution.table.col-1.text-7')}</td>
            </tr>
          </tbody>
        </table>
        <table className={classnames.tableMobile}>
          <thead>
            <tr>
              <th>{t('tokenomicDistribution.table.col-2.title')}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{t('tokenomicDistribution.table.col-2.text-1')}</td>
            </tr>
            <tr>
              <td>{t('tokenomicDistribution.table.col-2.text-2')}</td>
            </tr>
            <tr>
              <td>{t('tokenomicDistribution.table.col-2.text-3')}</td>
            </tr>
            <tr>
              <td>{t('tokenomicDistribution.table.col-2.text-4')}</td>
            </tr>
            <tr>
              <td>{t('tokenomicDistribution.table.col-2.text-5')}</td>
            </tr>
            <tr>
              <td>{t('tokenomicDistribution.table.col-2.text-6')}</td>
            </tr>
            <tr>
              <td>{t('tokenomicDistribution.table.col-2.text-7')}</td>
            </tr>
          </tbody>
        </table>
        <table className={classnames.tableMobile}>
          <thead>
            <tr>
              <th>{t('tokenomicDistribution.table.col-3.title')}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{t('tokenomicDistribution.table.col-3.text-3')}</td>
            </tr>
            <tr>
              <td>{t('tokenomicDistribution.table.col-3.text-2')}</td>
            </tr>
            <tr>
              <td>{t('tokenomicDistribution.table.col-3.text-3')}</td>
            </tr>
            <tr>
              <td>{t('tokenomicDistribution.table.col-3.text-4')}</td>
            </tr>
            <tr>
              <td>{t('tokenomicDistribution.table.col-3.text-5')}</td>
            </tr>
            <tr>
              <td>{t('tokenomicDistribution.table.col-3.text-6')}</td>
            </tr>
          </tbody>
        </table>
        <div
          className={classnames.description}
          dangerouslySetInnerHTML={{
            __html: t('tokenomicDistribution.description'),
          }}
        />
      </div>
    </Container>
  );
}

export default TokenomicDistribution;
