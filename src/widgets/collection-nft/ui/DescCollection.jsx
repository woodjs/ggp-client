import { useState } from 'react';
import { useTranslation } from 'next-i18next';
import { Alert, AlertIcon, Box, Collapse, Flex, Text } from '@chakra-ui/react';

export function DescCollectionWidget({ value }) {
  const [isDescOpen, setIsDescOpen] = useState(false);
  const { t } = useTranslation('store');

  return (
    <Alert status="info" flexDir="column">
      <Flex w="full">
        <AlertIcon />
        <Collapse startingHeight={20} in={isDescOpen}>
          <Box whiteSpace="pre-line">{value}</Box>
        </Collapse>
      </Flex>
      <Text
        color="blue.500"
        cursor="pointer"
        onClick={() => setIsDescOpen(!isDescOpen)}
      >
        {isDescOpen ? `${t('hide')}` : `${t('show')}`}
      </Text>
    </Alert>
  );
}
