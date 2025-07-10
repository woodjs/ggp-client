import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  Stack,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import { Field } from 'formik';
import React from 'react';

function ProfileFormInputGroupFormik({
  isInvalid,
  id,
  name,
  error = '',
  label = 'text',
  type = 'text',
  isDisabled,
  addon,
}) {
  const accentColor400 = useColorModeValue('brandGreen.400', 'brandYellow');
  return (
    <FormControl isInvalid={isInvalid} w="full">
      <Stack
        direction={{ base: 'column', md: 'row' }}
        alignItems={{ base: 'start', md: 'center' }}
        spacing={0}
      >
        <FormLabel w={['100%', null, '25%']} flex="0 0 auto">
          {label}
        </FormLabel>
        <VStack alignItems="start" w="full">
          <InputGroup>
            {addon && <InputLeftAddon>{addon}</InputLeftAddon>}
            <Field
              borderLeftRadius={addon ? 0 : 'auto'}
              as={Input}
              id={id}
              name={name}
              isDisabled={isDisabled}
              type={type}
              border="1px"
              borderColor="brandGray.200"
              focusBorderColor={accentColor400}
            />
          </InputGroup>
          <FormErrorMessage>{error}</FormErrorMessage>
        </VStack>
      </Stack>
    </FormControl>
  );
}
export default ProfileFormInputGroupFormik;
