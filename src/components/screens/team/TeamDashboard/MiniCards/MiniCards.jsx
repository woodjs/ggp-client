import { MiniCard } from '@/components/screens/team/TeamDashboard/MiniCard';
import { SimpleGrid } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { useTeam } from '@/hooks/user/useTeam';
import MiniCardsSkeleton from '@/components/screens/team/TeamDashboard/MiniCards/MiniCards.skeleton';
import formatCurrency from '@/utils/formatCurrency';

function MiniCards() {
  const { data, isLoading, isError } = useTeam();
  const { t } = useTranslation('team');

  const miniCards = [
    {
      id: 1,
      title: t('team-money-all'),
      value: formatCurrency(data?.totalTurnover),
    },
    // {
    //   title: t('cabinet:team-first-line'),
    //   value: '$10 000 000',
    //   badge: '-$200',
    //   badgeStyle: 'red',
    // },
    // {
    //   title: t('cabinet:team-need-bonus'),
    //   value: '$100',
    //   badge: '$200',
    // },
    {
      id: 4,
      title: t('team-all-partner'),
      value: data?.totalPartners,
    },
    {
      id: 5,
      title: t('team-all-actives'),
      value: data?.totalPartnersActive,
    },
    {
      id: 6,
      title: t('team-invited'),
      value: data?.totalPartnersFirstLine,
    },
    {
      id: 7,
      title: t('team-earned-team'),
      value: formatCurrency(data?.profitFromTeam),
    },
    {
      id: 8,
      title: t('team-bonus-company'),
      value: formatCurrency(data?.profitFromBonuses),
    },
    // {
    //   id: 9,
    //   title: t('team-earn-all'),
    //   value: formatCurrency(data?.totalProfit),
    // },
  ];

  if (isLoading) return <MiniCardsSkeleton />;
  if (isError) return <MiniCardsSkeleton isLoaded />;

  return (
    <SimpleGrid
      height="100%"
      columns={{ base: 1, sm: 2, lg: 2, xl: 3, '2xl': 3 }}
      spacing={{ base: 5, sm: 7 }}
    >
      {miniCards.map((item) => (
        <MiniCard key={item.id} {...item} />
      ))}
    </SimpleGrid>
  );
}

export default MiniCards;
