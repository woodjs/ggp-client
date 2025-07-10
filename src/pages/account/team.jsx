import CabinetContent from '@/components/layout/Cabinet/CabinetContent';
import TeamDashboard from '@/components/screens/team/TeamDashboard/TeamDashboard';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import TableTeam from '../../components/screens/team/Table/Table';
import TeamTable from '@/components/screens/team/TeamTable/TeamTable';

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', [
      'cabinet',
      'global',
      'team',
      'promo-modal',
    ])),
  },
});

export default function TeamPage() {
  const { t } = useTranslation('team');

  return (
    <CabinetContent title={t('team-title')}>
      <TeamDashboard />
      {/* <TableTeam /> */}
      <TeamTable />
      {/* <TableTeam2 /> */}
    </CabinetContent>
  );
}
