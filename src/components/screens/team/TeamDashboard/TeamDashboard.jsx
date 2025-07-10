import dynamic from 'next/dynamic';
import { Grid, GridItem } from '@chakra-ui/react';
import MiniCards from '@/components/screens/team/TeamDashboard/MiniCards/MiniCards';
import { LinksCard } from './LinksCard';
import { ProfileCard } from './ProfileCard';

function TeamDashboard() {
  return (
    <Grid
      w="full"
      gridTemplateAreas={{
        base: `"profile"
        "links"
        "miniCards"
        `,
        md: `"profile links"
        "miniCards miniCards"`,
        lg: `"profile miniCards miniCards"
        "links miniCards miniCards"
        "links miniCards miniCards"`,
        xl: `"profile miniCards miniCards miniCards"
        "links miniCards miniCards miniCards"
        "links miniCards miniCards miniCards"`,
        // '2xl': '"profile miniCards links"',
      }}
      gridTemplateColumns={{ md: '1fr 1fr', lg: '280px 1fr', xl: '400px 3fr' }}
      //   gridTemplateColumns={isColumn ? '1fr' : '1fr 3fr'}
      // gridTemplateColumns={{ base: '1fr', lg: '1fr 3fr' }}
      gap={{ base: 5, sm: 7 }}
    >
      <GridItem h="full" w="full" area="profile">
        <ProfileCard />
      </GridItem>
      <GridItem area="miniCards">
        <MiniCards />
      </GridItem>
      <GridItem
        alignSelf={{ base: 'auto', lg: 'start', xl: 'auto' }}
        w="full"
        h="full"
        area="links"
      >
        <LinksCard />
      </GridItem>
    </Grid>
  );
}

export default TeamDashboard;
