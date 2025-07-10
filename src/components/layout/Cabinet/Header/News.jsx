import { Text, useColorModeValue } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

function News() {
  const { t } = useTranslation('cabinet');
  const bgColorHead = useColorModeValue('brandGreen.400', 'brandYellow');
  return (
    <Link passHref href={{ pathname: '/account/applegiveaway' }}>
      <Text
        display={{ base: 'none', md: 'block' }}
        ml={{ base: '0px', xl: '200px' }}
        px="20px"
        w="fit-content"
        color={bgColorHead}
        border="1px solid"
        borderColor={bgColorHead}
        borderRadius="xl"
        fontWeight="bold"
      >
        {t('apple-giveaway')}
      </Text>
    </Link>
  );
}

export default News;
