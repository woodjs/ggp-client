import { Button, Flex, VStack } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';

/**
 * @param {Object} props
 * @param {React.ReactNode} [props.children] - children
 * @param {Function} [props.onSubmit] - submit callback
 */
function ProfileForm({ children, onSubmit, isDisabled }) {
  const { t } = useTranslation('profile');
  return (
    <VStack spacing="30px">
      {children}
      <Flex w="full" justify="end">
        <Button
          onClick={onSubmit}
          size="md"
          maxW={{ base: 'full', sm: '240px' }}
          w="full"
          isDisabled={isDisabled}
        >
          {t('btn-confirm')}
        </Button>
      </Flex>
    </VStack>
  );
}

export default ProfileForm;
