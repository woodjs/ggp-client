import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import {
	Box,
	Flex,
	Grid,
	GridItem,
	Stack,
	Text,
	useColorModeValue,
} from '@chakra-ui/react';
import 'swiper/css';
import 'swiper/css/navigation';
import Chart from '@/components/screens/statistics/Chart/Chart';
import { useTranslation } from 'next-i18next';
import CabinetContent from '../../components/layout/Cabinet/CabinetContent';
import {
	CardAffilate,
	CardAward,
	CardInvest,
} from '../../components/screens/statistics';
import { Card } from '@/shared/ui';
import {
	BarChart,
	Bar,
	XAxis,
	YAxis,
	Tooltip,
	Legend,
	CartesianGrid,
} from 'recharts';

const data = [{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 }];

const renderBarChart = (
	<BarChart width={600} height={300} data={data}>
		<XAxis dataKey="name" stroke="#FFDC3F" />
		<YAxis />
		<Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
		<Legend
			width={100}
			wrapperStyle={{
				top: 40,
				right: 20,
				// backgroundColor: '#f5f5f5',
				// border: '1px solid #d5d5d5',
				borderRadius: 3,
				lineHeight: '40px',
			}}
		/>
		<CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
		<Bar dataKey="uv" fill="#8884d8" barSize={30} />
	</BarChart>
);

export const getStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale ?? 'en', [
			'cabinet',
			'statistics',
			'global',
			'promo-modal',
		])),
	},
});

export default function IndexPage() {
	const { t } = useTranslation('cabinet');

	return (
		<CabinetContent
			bgImage={useColorModeValue(
				'/images/bg/statistics/light.jpg',
				'/images/bg/statistics/dark.jpg'
			)}
		>
			<Box
				w={{
					'2xl': 'full',
				}}
			>
				<Text as="span" display="block" fontSize="25px" fontWeight={700}>
					График урожаев
				</Text>
				<Card p="30px" maxW="fit-content" mt="20px">
					<Flex gap="60px">
						<Stack>
							<Text fontWeight="bold" fontSize="45px" textAlign="center">
								15
							</Text>
							<Text>Количество NFT</Text>
						</Stack>
						<Stack>
							<Text fontWeight="bold" fontSize="45px" textAlign="center">
								2.5
							</Text>

							<Text>Floor Price, SOL</Text>
						</Stack>
						<Stack>
							<Text fontWeight="bold" fontSize="45px" textAlign="center">
								0
							</Text>
							<Text>Урожаев собрано</Text>
						</Stack>
						<Stack>
							<Text fontWeight="bold" fontSize="45px" textAlign="center">
								3
							</Text>
							<Text>Урожаев осталось</Text>
						</Stack>
						<Stack>
							<Text fontWeight="bold" fontSize="45px" textAlign="center">
								60
							</Text>
							<Text>Полученный вес, г.</Text>
						</Stack>
					</Flex>
				</Card>

				<Text display="block" fontSize="25px" fontWeight={700} mt="46px">
					Дата ближайшего урожая:{' '}
					<Text as="span" color="brandYellow">
						20.06.2026 г
					</Text>
				</Text>

				<Card maxW="fit-content" mt="20px">
					{renderBarChart}
				</Card>

				{/* <Grid
					alignItems="stretch"
					gridTemplateAreas={{
						base: `"invest"
          "awards"
          "chart"
          "assets"`,
						lg: `"invest awards"
        "chart chart"
        "assets assets"`,
					}}
					gridTemplateColumns={{
						base: '1fr',
						lg: '1fr 0.8fr',
						xl: '1fr 0.5fr',
					}}
					gap="20px"
				>
					<GridItem w="full" gridArea="invest">
						<CardInvest />
					</GridItem>
					<GridItem position="relative" w="full" gridArea="awards">
						<CardAward />
					</GridItem>
					<GridItem w="full" gridArea="chart">
						<Chart />
					</GridItem>
				</Grid> */}
			</Box>
		</CabinetContent>
	);
}
