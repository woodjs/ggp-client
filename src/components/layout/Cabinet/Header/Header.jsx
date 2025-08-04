import Link from 'next/link';
import Image from 'next/image';
import {
	Box,
	Button,
	Flex,
	HStack,
	Icon,
	Text,
	useColorModeValue,
	useMediaQuery,
} from '@chakra-ui/react';
import { BellIcon } from '@chakra-ui/icons';

import { BsCameraVideo } from 'react-icons/bs';
import { useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';
import dynamic from 'next/dynamic';
import Balance from '@/components/layout/Cabinet/Header/Balance/Balance';
import Profile from './Profile/Profile';
import Notification from './Notification/Notification';
import LangaugeSelect from '../LangaugeSelect/LangaugeSelect';
import Timer from './Timer';
import News from './News';
import { keyframes } from '@emotion/react';

const opacityAnim = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
`;

export default function Header({ onOpen, isOpen, ...rest }) {
	const [scroll, setScroll] = useState(false);
	const { t } = useTranslation();
	const accentColor = useColorModeValue('brandGreen.400', 'brandYellow');
	useEffect(() => {
		window.addEventListener('scroll', () => {
			setScroll(window.scrollY > 50);
		});
	}, []);
	const [isShortNews] = useMediaQuery('(max-width: 1530px)');

	return (
		<Flex
			w="full"
			pos="sticky"
			zIndex="overlay"
			left={0}
			top={0}
			px={{ base: 4, md: 4 }}
			height="20"
			alignItems="center"
			justifyContent={{ base: 'space-between', md: 'flex-end' }}
			transition="0.3s"
			bg={useColorModeValue(
				(scroll || isOpen) && 'brandGray.100',
				(scroll || isOpen) && 'darkLight'
			)}
			{...rest}
		>
			<Box display={{ base: 'block', lg: 'none' }}>
				<Link href="/" passHref>
					<Image
						src={useColorModeValue(
							'/images/logo.svg',
							'/images/logo-yellow.svg'
						)}
						width={50}
						height={50}
						alt="logo"
						priority
					/>
				</Link>
			</Box>

			{/* <Timer /> */}
			{/* <Text
        display={{ base: 'none', md: 'block' }}
        ml={{ base: '0px', xl: '140px' }}
        px="20px"
        w="full"
      >
        <Link href="/account/store">
          {t('cabinet:news', {
            context: isShortNews ? 'short' : 'full',
          })}{' '}
        </Link>
      </Text> */}
			<HStack spacing="20px">
				<Box display={{ base: 'none', sm: 'block' }}>
					<Link
						passHref
						href={{ pathname: '/account/media', query: { tab: 'streams' } }}
					>
						<Button variant="ghost">
							<HStack>
								<Box position="relative">
									<Icon boxSize="18px" as={BsCameraVideo} />{' '}
									<Box
										position="absolute"
										top="-2px"
										left="-2px"
										bg="red"
										w="7px"
										h="7px"
										borderRadius="100%"
										animation={`${opacityAnim} 1.5s ease-in-out infinite`}
									/>
								</Box>
								<Text fontWeight="medium">Live</Text>
							</HStack>
						</Button>
					</Link>
				</Box>
				<Link passHref href={{ pathname: '/account/finance' }}>
					<Balance />
				</Link>
				<LangaugeSelect />
				{/* <Notification /> */}
				<Profile />
			</HStack>
		</Flex>
	);
}
