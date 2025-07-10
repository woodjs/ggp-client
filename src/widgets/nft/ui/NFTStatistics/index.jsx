import { useRouter } from 'next/router';
import { SiTether } from 'react-icons/si';
import {
  Box,
  HStack,
  Image,
  SimpleGrid,
  Text,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

import { Card } from '@/shared/ui';
import { formatCurrency } from '@/shared/lib';
import { useNFTStats } from '@/entities/nft/model';

// import NFTImage from './NFTImage';
import { NFTDetails } from './NFTDetails';

export function NFTStatistics() {
  const { t } = useTranslation('store');
  const router = useRouter();
  const { data, isLoading, isError } = useNFTStats(router.query.id);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error...</div>;

  return (
    <Card>
      <SimpleGrid
        gap={{ base: '20px', md: '40px' }}
        columns={{ base: '1', lg: '2' }}
        p={{ base: '20px', md: '35px' }}
      >
        <VStack
          spacing="10px"
          justifyContent="space-between"
          alignItems="stretch"
          pos="relative"
        >
          <Box>
            <Image
              src="/images/nft/gift.png"
              alt=""
              boxSize="60px"
              pos="absolute"
              left="-20px"
              top="-20px"
            />
            <Image
              src={data.image}
              objectFit="cover"
              h="full"
              // maxH="400px"
              borderRadius="6px"
            />
          </Box>

          <SimpleGrid columns={{ base: 1, sm: 2 }} spacing="4px" w="full">
            <Box
              flex={1}
              p="10px"
              borderRadius="6px"
              bg={useColorModeValue('rgba(18, 18, 18, 0.04)', 'blackAlpha.400')}
              textAlign="center"
            >
              <Text
                textAlign="center"
                textTransform="uppercase"
                fontWeight="bold"
                color={useColorModeValue('#545454', '#fff')}
                fontSize="10px"
              >
                {t('nft-price')}
              </Text>
              <HStack w="100%" justifyContent="center">
                <Text>{formatCurrency({ amount: data.nft.price })}</Text>
                <SiTether />
              </HStack>
            </Box>
            <Box
              flex={1}
              p="10px"
              borderRadius="6px"
              bg={useColorModeValue('rgba(18, 18, 18, 0.04)', 'blackAlpha.400')}
              textAlign="center"
            >
              <Text
                textAlign="center"
                textTransform="uppercase"
                fontWeight="bold"
                color={useColorModeValue('#545454', '#fff')}
                fontSize="10px"
              >
                {t('revenue-2')}
              </Text>
              <Text>{data.nft.percent}%</Text>
            </Box>
            <Box
              flex={1}
              p="10px"
              borderRadius="6px"
              bg={useColorModeValue('rgba(18, 18, 18, 0.04)', 'blackAlpha.400')}
              textAlign="center"
            >
              <Text
                textAlign="center"
                textTransform="uppercase"
                fontWeight="bold"
                color={useColorModeValue('#545454', '#fff')}
                fontSize="10px"
              >
                {t('yearly-revenue')}
              </Text>
              <HStack w="100%" justifyContent="center">
                <Text>
                  {formatCurrency({
                    amount: (data.nft.percent * data.nft.price) / 100,
                  })}
                </Text>
                <SiTether />
              </HStack>
            </Box>
            <Box
              flex={1}
              p="10px"
              borderRadius="6px"
              bg={useColorModeValue('rgba(18, 18, 18, 0.04)', 'blackAlpha.400')}
              textAlign="center"
            >
              <Text
                textAlign="center"
                textTransform="uppercase"
                fontWeight="bold"
                color={useColorModeValue('#545454', '#fff')}
                fontSize="10px"
              >
                {t('income-per-cycle')}
              </Text>
              <HStack w="100%" justifyContent="center">
                <Text>{formatCurrency({ amount: data.profitPerCycle })}</Text>
                <SiTether />
              </HStack>
            </Box>
          </SimpleGrid>
        </VStack>

        <NFTDetails data={data} />
      </SimpleGrid>
    </Card>
  );
}
