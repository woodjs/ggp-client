import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import { Field } from 'formik';

function ProfileFormInputFormik({
  isInvalid,
  id,
  name,
  error,
  label = 'text',
  type = 'text',
  isDisabled,
}) {
  const accentColor400 = useColorModeValue('brandGreen.400', 'brandYellow');
  return (
    <FormControl isInvalid={isInvalid} w="full">
      <Stack
        direction={{ base: 'column', md: 'row' }}
        alignItems={{ base: 'start', md: 'center' }}
        spacing={0}
      >
        <FormLabel w={{ base: 'full', md: '25%' }} flex="0 0 auto">
          {label}
        </FormLabel>
        <VStack alignItems="start" w="full">
          <Field
            as={Input}
            id={id}
            name={name}
            type={type}
            variant="filled"
            w="full"
            h="40px"
            border="1px"
            borderColor="brandGray.200"
            focusBorderColor={accentColor400}
            isDisabled={isDisabled}
          />
          <FormErrorMessage>{error}</FormErrorMessage>
        </VStack>
      </Stack>
    </FormControl>
  );
}
export default ProfileFormInputFormik;
