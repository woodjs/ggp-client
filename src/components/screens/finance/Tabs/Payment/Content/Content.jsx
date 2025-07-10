import { Stack, Text } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';

export default function ContentForm({ title, handleBack, children }) {
  const { t } = useTranslation();
  return (
    <Stack spacing="20px" w="full">
      {handleBack && (
        <Text
          cursor="pointer"
          color="brandGray.200"
          fontWeight="bold"
          onClick={handleBack}
        >
          {t('global:back')}
        </Text>
      )}
      <Text fontWeight="bold">{title}</Text>

      {children}
    </Stack>
  );
}
