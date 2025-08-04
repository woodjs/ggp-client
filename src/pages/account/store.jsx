import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { Box, Center, useColorModeValue } from '@chakra-ui/react';
import CabinetContent from '@/components/layout/Cabinet/CabinetContent';
import { CollectionNFTList } from '@/widgets/collection-nft';
import CollectionTimer from '@/widgets/collection-nft/ui/CollectionTimer';
import { GradeList } from '@/widgets/grade-list';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

export const getStaticProps = async ({ locale }) => ({
	props: {
		...(await serverSideTranslations(locale ?? 'en', [
			'cabinet',
			'store',
			'global',
		])),
	},
});

export default function StorePage() {
	const { t } = useTranslation('store');

	return (
		<CabinetContent
			bgImage={useColorModeValue(
				'/images/bg/store/light.png',
				'/images/bg/store/dark.png'
			)}
			title={t('title')}
		>
			{/* <Box
				display="flex"
				flexDir="column"
				alignSelf="center"
				mb="20px"
				position="relative"
			>
				<CollectionTimer />
			</Box> */}
			<WalletMultiButton />
			<Center w="full">
				<GradeList />
				{/* <CollectionNFTList /> */}
			</Center>
		</CabinetContent>
	);
}
