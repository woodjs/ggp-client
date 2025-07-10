import { Grid, GridItem, Skeleton } from '@chakra-ui/react';
import ProfileCardBody from '../../Card/CardBody/CardBody';
import ProfileForm from '../../ProfileForm';

export default function ProfilePrivacySekeleton() {
  return (
    <ProfileCardBody mt="50px">
      <ProfileForm>
        <Grid templateColumns={{ base: '1fr', lg: '1fr 1fr' }} gap={6} w="full">
          <GridItem>
            <Skeleton height="40px" borderRadius="md" />
          </GridItem>
          <GridItem>
            <Skeleton height="40px" borderRadius="md" />
          </GridItem>

          <GridItem>
            <Skeleton height="40px" borderRadius="md" />
          </GridItem>
          <GridItem>
            <Skeleton height="40px" borderRadius="md" />
          </GridItem>

          <GridItem>
            <Skeleton height="40px" borderRadius="md" />
          </GridItem>

          <GridItem>
            <Skeleton height="40px" borderRadius="md" />
          </GridItem>
        </Grid>
      </ProfileForm>
    </ProfileCardBody>
  );
}
