import { Box, Stack } from '@chakra-ui/react';
import { useMarketing } from '@/entities/marketing';
import RanksTable from './RanksTable';
import RanksTableSkeleton from './RanksTable.skeleton';

function TableRoad() {
  const { data, isLoading, isError } = useMarketing();

  if (isLoading) {
    return <RanksTableSkeleton />;
  }
  if (isError) return null;
  return (
    <Box h="full" w="full">
      <Stack>
        <RanksTable ranksData={data} />
      </Stack>
    </Box>
  );
}

export default TableRoad;
