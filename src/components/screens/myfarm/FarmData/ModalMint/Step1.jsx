import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  HStack,
} from '@chakra-ui/react';

export default function Step1() {
  return (
    <Alert status="warning">
      <Box>
        <HStack justifyContent="center">
          <AlertIcon />
          <AlertTitle>Внимание!</AlertTitle>
        </HStack>
        <AlertDescription textAlign="center" display="block">
          Минт NFT может привести к уменьшению статистики личной инвестиции,
          командного оборота и текущего уровня. Рекомендуется тщательно оценить
          риски и преимущества перед продолжением.
        </AlertDescription>
      </Box>
    </Alert>
  );
}
