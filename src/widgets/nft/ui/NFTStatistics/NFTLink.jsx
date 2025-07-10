import { useClipboard, Button, Tooltip, Icon } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { AiOutlineShareAlt } from 'react-icons/ai';
import { CheckIcon } from '@chakra-ui/icons';

export function LinkComponent(value) {
  return <Link href={value ? `/nft/${value}` : '/nft/mint'} />;
}

export function NftLink({ value }) {
  const { i18n } = useTranslation();
  const { t } = useTranslation('nft');
  const currentLanguage = i18n.language;
  const xValue = `${window.location.origin}/${currentLanguage}/nft/${value}`;

  const { hasCopied, onCopy } = useClipboard(xValue);

  return (
    <Tooltip label={t('copy-link')} placement="top">
      <Button onClick={onCopy}>
        {hasCopied ? (
          <CheckIcon w={6} h={6} />
        ) : (
          <Icon as={AiOutlineShareAlt} w={6} h={6} />
        )}
      </Button>
    </Tooltip>
  );
}
