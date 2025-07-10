import {
  Box,
  Button,
  Flex,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';

export default function RequisiteItem({
  category,
  name,
  value,
  handleUpdate,
  handleDelete,
}) {
  return (
    <Box
      // px={{ base: '10px', md: '50px' }}
      px="23px"
      py="10px"
      borderTop="1px"
      borderColor={useColorModeValue('gray.200', 'whiteAlpha.300')}
    >
      <Flex justify="space-between">
        <Box>
          <Text fontWeight="bold">{name || category.name}</Text>
          <Text
            fontSize="sm"
            pos="relative"
            _before={{
              content: `''`,
              display: 'block',
              height: '20px',
              position: 'absolute',
              left: 0,
              top: 0,
              width: '110%',
              backgroundImage: useColorModeValue(
                'linear-gradient(90deg, rgba(255, 255, 255, 0), #fff, #fff)',
                'linear-gradient(90deg, rgba(45, 55, 72, 0), #2D3748, #2D3748)'
              ),
            }}
          >
            {value.length > 15 ? `${value.slice(0, 15)}...` : value}
          </Text>
        </Box>
        <Stack spacing="20px" direction="row">
          <Button
            variant="border"
            borderColor="brandGray.200"
            onClick={handleUpdate}
          >
            <EditIcon />
          </Button>
          <Button
            variant="border"
            borderColor="brandGray.200"
            onClick={handleDelete}
          >
            <DeleteIcon />
          </Button>
        </Stack>
      </Flex>
    </Box>
  );
}
