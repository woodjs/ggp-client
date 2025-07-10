import {
  Card,
  SkeletonText,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tr,
} from '@chakra-ui/react';

function RanksTableSkeleton() {
  const lines = Array(16).fill(0);

  return (
    <TableContainer mb="50px" as={Card}>
      <Table size="sm">
        <Tbody>
          {lines.map((value, index) => (
            <Tr key={index + 1}>
              <Td borderColor="inherit">
                <SkeletonText />
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}

export default RanksTableSkeleton;
