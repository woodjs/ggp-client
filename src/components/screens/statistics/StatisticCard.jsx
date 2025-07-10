import { Box, Text } from '@chakra-ui/react';
import Card from '../../Card/Card';

export default function StatisticCard({ title, children, ...rest }) {
  return (
    <Card h="full" w="full" p="30px" display="flex" flexDir="column" {...rest}>
      <Text
        as="h3"
        fontSize="24px"
        fontWeight={700}
        mb="16px"
        textAlign={{ base: 'center', sm: 'left' }}
      >
        {title}
      </Text>
      <Box
        h="full"
        maxW={{ base: 'full', sm: 'full' }}
        m={{ base: 'auto', sm: 'unset' }}
      >
        {children}
      </Box>
    </Card>
  );
}
