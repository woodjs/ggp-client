import NextLink from 'next/link';
import CabinetContent from '@/components/layout/Cabinet/CabinetContent';
import { useTranslation } from 'next-i18next';
import {
	Box,
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	Button,
	Card,
	Center,
	Flex,
	Stack,
	Table,
	Tbody,
	Td,
	Text,
	Th,
	Thead,
	Tr,
} from '@chakra-ui/react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useState } from 'react';

import { HarvestMonthsSelector } from '@/widgets/farm/harvest-months-selector';
import { useRouter } from 'next/router';
import { DescCollectionWidget } from '@/widgets/collection-nft/ui/DescCollection';

import { useCollection } from '@/entities/collection-nft/model';
import { NFTListStore } from '@/widgets/nft';
import { InvestmentCalculator } from '@/features/calcs';
import { CardList } from '@/shared/ui';

// export default function NFTCollectionPage() {
//   const router = useRouter();
//   const { t } = useTranslation('store');
//   const { data, isLoading: collectionLoading } = useCollection(
//     router.query.collectionId
//   );
//   const [selectedPlantingId, setSelectedPlantingId] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);

//   if (collectionLoading) return 'Loading...';

//   return (
//     <CabinetContent title={data.name}>
//       <Stack spacing="30px">
//         <Breadcrumb>
//           <BreadcrumbItem>
//             <BreadcrumbLink as={NextLink} href="/account/store">
//               {t('title')}
//             </BreadcrumbLink>
//           </BreadcrumbItem>
//           <BreadcrumbItem>
//             <BreadcrumbLink>{data.name}</BreadcrumbLink>
//           </BreadcrumbItem>
//         </Breadcrumb>

//         {data.isReinvest ? (
//           <Stack direction={['column', null, null, 'row']} spacing="24px">
//             <Card w="full">
//               <Table variant="unstyled">
//                 <Thead>
//                   <Tr>
//                     <Th>{t('deposit-sum')}</Th>
//                     <Th textAlign="center">{t('revenue-2')}</Th>
//                   </Tr>
//                 </Thead>
//                 <Tbody>
//                   <Tr fontSize="18px">
//                     <Td>50 - 200 USDT</Td>
//                     <Td textAlign="center">24%</Td>
//                   </Tr>
//                   <Tr fontSize="18px">
//                     <Td>201 - 600 USDT</Td>
//                     <Td textAlign="center">26%</Td>
//                   </Tr>
//                   <Tr fontSize="18px">
//                     <Td>601 - 1 000 USDT</Td>
//                     <Td textAlign="center">30%</Td>
//                   </Tr>
//                   <Tr fontSize="18px">
//                     <Td>1 001 - 3 000 USDT</Td>
//                     <Td textAlign="center">35%</Td>
//                   </Tr>
//                   <Tr fontSize="18px">
//                     <Td>3 001 - 6 000 USDT</Td>
//                     <Td textAlign="center">40%</Td>
//                   </Tr>
//                   <Tr fontSize="18px">
//                     <Td>6 001 - 12 000 USDT</Td>
//                     <Td textAlign="center">45%</Td>
//                   </Tr>
//                   <Tr fontSize="18px">
//                     <Td>12 001 - 20 000 USDT</Td>
//                     <Td textAlign="center">50%</Td>
//                   </Tr>
//                   <Tr fontSize="18px">
//                     <Td>20 001 - 40 000 USDT</Td>
//                     <Td textAlign="center">60%</Td>
//                   </Tr>
//                   <Tr fontSize="18px">
//                     <Td>40 001 - 80 000 USDT</Td>
//                     <Td textAlign="center">65%</Td>
//                   </Tr>
//                   <Tr fontSize="18px">
//                     <Td>80 001 - 100 000 USDT</Td>
//                     <Td textAlign="center">68%</Td>
//                   </Tr>
//                   <Tr fontSize="18px">
//                     <Td>+100 001 USDT</Td>
//                     <Td textAlign="center">72%</Td>
//                   </Tr>
//                 </Tbody>
//               </Table>
//             </Card>
//             <Card w="full" p={4}>
//               <Center w="full" h="full" alignItems="center">
//                 <InvestmentCalculator />
//               </Center>
//             </Card>
//           </Stack>
//         ) : (
//           <>
//             <DescCollectionWidget value={data.description} />
//             <HarvestMonthsSelector
//               collectionId={router.query.collectionId}
//               handleChangePlantingId={setSelectedPlantingId}
//               handleLoading={setIsLoading}
//             />
//             <NFTListStore
//               plantingId={selectedPlantingId}
//               isLoading={isLoading}
//             />
//           </>
//         )}
//       </Stack>
//     </CabinetContent>
//   );
// }
// export const getStaticPaths = async () => {
//   const ids = await getCollections();
//   const paths = ids.map((item) => ({
//     params: { collectionId: String(item.id) },
//   }));

//   return {
//     paths,
//     fallback: false,
//   };
// };

// export const getStaticProps = async ({ params, locale }) => {
//   const collection = await getCollectionById(params.collectionId);

//   return {
//     props: {
//       collection,
//       ...(await serverSideTranslations(locale ?? 'en', [
//         'cabinet',
//         'global',
//         'store',
//       ])),
//     },
//   };
// };

export default function NFTCollectionPage() {
	const router = useRouter();

	return (
		<CabinetContent title="Сорт After Shock">
			<Button bg="rgb(1, 113, 1)" color="#fff">
				Подробнее о сорте
			</Button>
			<CardList spacing="20px" mt="56px">
				<Card p="16px" borderRadius="24px" role="group" w="full">
					<Box w="full" h={240} bg="#000" borderRadius="10px"></Box>
					<Text fontWeight={700} align="center" my="10px" fontSize="20px">
						After Shock 1/201
					</Text>
					<Stack spacing={1}>
						<Flex
							w="full"
							justify="space-between"
							pb="8px"
							// borderBottom={
							// 	index + 1 === attributes.length
							// 		? 'none'
							// 		: `1px solid ${css?.color}`
							// }
							fontWeight="bold"
							fontSize="14px"
						>
							<Text>Доход от урожая куста</Text>
							<Text>25% (30g)</Text>
						</Flex>
						<Flex
							w="full"
							justify="space-between"
							pb="8px"
							fontWeight="bold"
							fontSize="14px"
						>
							<Text>Период начисления дохода</Text>
							<Text>5 мес</Text>
						</Flex>
						<Flex
							w="full"
							justify="space-between"
							pb="8px"
							fontWeight="bold"
							fontSize="14px"
						>
							<Text>Ближайший урожай</Text>
							<Text>20.01.2026</Text>
						</Flex>
						<Flex
							w="full"
							justify="space-between"
							pb="8px"
							fontWeight="bold"
							fontSize="14px"
						>
							<Text>Текущий баланс</Text>
							<Text>0 g.</Text>
						</Flex>
						<Flex
							w="full"
							justify="space-between"
							pb="8px"
							fontWeight="bold"
							fontSize="14px"
						>
							<Text>Урожаев осталось</Text>
							<Text>5</Text>
						</Flex>
						<Flex
							w="full"
							justify="space-between"
							pb="8px"
							fontWeight="bold"
							fontSize="14px"
						>
							<Text>Стоимость NFT</Text>
							<Text>2,5 SOL</Text>
						</Flex>
					</Stack>

					<Stack mt="15px">
						<Button>Mint</Button>
					</Stack>
				</Card>
			</CardList>
		</CabinetContent>
	);
}

export async function getStaticPaths() {
	return {
		paths: [],
		fallback: 'blocking',
	};
}

export const getStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale ?? 'en', [
			'cabinet',
			'store',
			'global',
		])),
	},
});
