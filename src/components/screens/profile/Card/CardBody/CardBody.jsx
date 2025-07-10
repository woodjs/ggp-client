import { Box } from '@chakra-ui/react';

export default function ProfileCardBody({ children, ...rest }) {
  return (
    <Box p="20px" {...rest}>
      {children}
    </Box>
  );
}
