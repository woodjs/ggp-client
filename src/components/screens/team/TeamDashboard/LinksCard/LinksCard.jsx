import { Card } from '@/components/Card';
import { CopyIcon } from '@chakra-ui/icons';
import { Box, HStack, Stack, Text, useClipboard } from '@chakra-ui/react';

import { useProfile } from '@/entities/profile';
import { useEffect } from 'react';
import { toast } from 'react-toastify';
import { useTranslation } from 'next-i18next';

/**
 *
 * @param {Object} props
 * @param {{link: String, name: String}[]} props.links
 * @returns {JSX.Element}
 */
function LinksCard() {
  const { t } = useTranslation('team');
  const { onCopy, setValue, hasCopied } = useClipboard();
  const {
    onCopy: onCopyBot,
    setValue: setValueBot,
    hasCopied: hasCopiedBot,
  } = useClipboard();
  const { data } = useProfile();

  useEffect(() => {
    if (!data) return;

    setValue(`${window.location.origin}/auth/register/${data.login}`);
    setValueBot(`https://t.me/Pow_star_bot?start=${data.login}`);
  }, [data]);

  useEffect(() => {
    if (!hasCopied && !hasCopiedBot) return;
    toast.success(t('global:link-copied'));
  }, [hasCopied, hasCopiedBot]);

  return (
    <Card h="full" display="flex" flexDir="column" p="20px">
      <Text
        w="full"
        textAlign={{ base: 'center', xl: 'left' }}
        fontWeight="bold"
        fontSize="20px"
      >
        {t('user-links-title')}
      </Text>
      <Stack
        h="full"
        mt="20px"
        spacing="0"
        gap="10px"
        w="full"
        justifyContent="center"
      >
        <HStack
          cursor="pointer"
          _active={{ opacity: 0.5 }}
          onClick={onCopy}
          gap="10px"
          justifyContent="start"
        >
          <CopyIcon boxSize="20px" />
          <Box w="160px" maxW="200px">
            <Text userSelect="none">{t('user-links-register')}</Text>
          </Box>
        </HStack>
        {/* <HStack
          cursor="pointer"
          _active={{ opacity: 0.5 }}
          onClick={onCopyBot}
          gap="10px"
          justifyContent="start"
        >
          <CopyIcon boxSize="20px" />
          <Box w="160px" maxW="200px">
            <Text userSelect="none">{t('user-links-bot')}</Text>
          </Box>
        </HStack> */}
      </Stack>
    </Card>
  );
}

export default LinksCard;
