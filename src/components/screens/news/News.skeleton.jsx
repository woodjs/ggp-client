import {
  Box,
  Button,
  Grid,
  GridItem,
  Image,
  Skeleton,
  SkeletonText,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

function NewsCard() {
  return (
    <Box
      bg={useColorModeValue('white', 'darkLight')}
      borderRadius="16px"
      overflow="hidden"
    >
      <Skeleton height="200px" w="full" />
      <Box p="20px">
        <SkeletonText />
      </Box>
    </Box>
  );
}

export default function NewsSkeleton() {
  return (
    <Grid templateColumns="repeat(auto-fit, minmax(280px, 1fr))" gap="15px">
      <GridItem>
        <NewsCard />
      </GridItem>
      <GridItem>
        <NewsCard />
      </GridItem>
      <GridItem>
        <NewsCard />
      </GridItem>
      <GridItem>
        <NewsCard />
      </GridItem>
      <GridItem>
        <NewsCard />
      </GridItem>
      <GridItem>
        <NewsCard />
      </GridItem>
      <GridItem>
        <NewsCard />
      </GridItem>
      <GridItem>
        <NewsCard />
      </GridItem>
    </Grid>
  );
}
