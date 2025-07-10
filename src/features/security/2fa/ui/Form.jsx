import {
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Skeleton,
  VStack,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import { useProtectionMethods } from '@/entities/security/protection';
import CodeInputWithButton from './CodeInputWithButton';

export default function Form2FA({ action, codes, onChange }) {
  const { t } = useTranslation('two-factor');
  const { data, isLoading, isError } = useProtectionMethods();

  if (isLoading)
    return (
      <VStack spacing="14px">
        <Skeleton w="full" h="30px" />
        <Skeleton w="full" h="30px" />
        <Skeleton w="full" h="30px" />
      </VStack>
    );

  if (isError) return 'Error load 2FA form :(';

  return (
    <VStack spacing="14px" width="full">
      {data.email && (
        <CodeInputWithButton
          label="Email"
          helpText={t('email-subtitle')}
          method="email"
          action={action}
          value={codes.email}
          onChange={onChange}
        />
      )}

      {data.tg && (
        <CodeInputWithButton
          label="Telegram"
          helpText={t('put-bot-code')}
          method="tg"
          action={action}
          value={codes.tg}
          onChange={onChange}
        />
      )}

      {data.ga && (
        <FormControl>
          <FormLabel>Google Authenticator</FormLabel>
          <Input value={codes.ga} onChange={onChange} name="ga" type="number" />
          <FormHelperText>{t('ga-subtitle')}</FormHelperText>
        </FormControl>
      )}
    </VStack>
  );
}
