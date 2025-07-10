import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { useState, useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';

import { useTransactions } from '@/hooks/user/useTransactions';

import { Card } from '@/components/Card';
import CabinetContent from '@/components/layout/Cabinet/CabinetContent';
import TransactionFilters from '@/components/screens/finance/transactions/Filters/Filters';
import TransactionsLayout from '@/components/screens/finance/transactions/Layout/Layout';
import PaginatedItems from '@/components/layout/Pagination/Pagination';

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', [
      'transactions',
      'cabinet',
      'global',
      'promo-modal',
    ])),
  },
});

export default function TransactionPage() {
  const { t } = useTranslation('transactions');
  const [limit, setLimit] = useState(10);
  const [filters, setFilters] = useState({ limit });

  const [page, setPage] = useState(1);
  const [cachedTotalPage, setTotalPage] = useState(0);

  const { data, isLoading, isError, error, refetch } = useTransactions({
    ...filters,
    page,
  });

  const handlePage = (e) => {
    setPage(e.selected + 1);
  };

  const handleSubmit = () => {
    refetch();
  };

  useEffect(() => {
    if (data && data.count !== cachedTotalPage) {
      const totalPage = Math.floor(data.count / limit);
      setTotalPage(totalPage > 1 ? totalPage : 0);
    }
  }, [data]);

  useEffect(() => {
    setPage(1);
  }, [limit, filters.typeId, filters.from, filters.to]);

  return (
    <CabinetContent title={t('title')}>
      <Card py="20px">
        <TransactionFilters
          data={data}
          filters={filters}
          setFilters={setFilters}
          setLimit={setLimit}
          limit={limit}
          handleSubmit={handleSubmit}
        />
        <TransactionsLayout
          data={data}
          isLoading={isLoading}
          isError={isError}
          error={error}
        />

        <Box ml="20px">
          <PaginatedItems
            count={cachedTotalPage}
            page={page}
            handleClick={handlePage}
          />
        </Box>
      </Card>
    </CabinetContent>
  );
}
