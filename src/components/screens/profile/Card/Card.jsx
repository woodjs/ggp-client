import { Box, Text } from '@chakra-ui/react';
import { Card } from '@/components/Card';

export default function ProfileCard({ title, borderTitle, children, ...rest }) {
  return (
    <Card w="full" {...rest}>
      {borderTitle ? (
        <Box
          borderBottom="1px"
          borderColor="rgba(160, 174, 192, 0.5);"
          p="20px"
        >
          <Text fontWeight={700}>{title}</Text>
        </Box>
      ) : (
        <Text fontWeight={700} p="20px">
          {title}
        </Text>
      )}

      {children}
    </Card>
  );
}
