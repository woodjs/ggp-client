import Modal from '@/components/layout/Modal/Modal';
import { Card, CardList } from '@/shared/ui';
import {
	Box,
	Button,
	Flex,
	Stack,
	Text,
	useDisclosure,
} from '@chakra-ui/react';

export function GradeList() {
	const modal = useDisclosure();
	return (
		<>
			<CardList spacing="20px">
				<Card p="16px" borderRadius="24px" role="group" w="full">
					<Box w="full" h={240} bg="#000" borderRadius="10px"></Box>
					<Text fontWeight={700} align="center" my="10px" fontSize="20px">
						After Shock
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
							<Text>Базовая цена</Text>
							<Text>2.5 SOL</Text>
						</Flex>
						<Flex
							w="full"
							justify="space-between"
							pb="8px"
							fontWeight="bold"
							fontSize="14px"
						>
							<Text>Общее количество NFT</Text>
							<Text>201</Text>
						</Flex>
						<Flex
							w="full"
							justify="space-between"
							pb="8px"
							fontWeight="bold"
							fontSize="14px"
						>
							<Text>Доступно к покупке</Text>
							<Text>201</Text>
						</Flex>
					</Stack>

					<Stack mt="15px">
						<Button>Посмотреть NFT</Button>
						<Button bg="rgba(1, 113, 1, 1)" color="#fff" onClick={modal.onOpen}>
							Подробнее о сорте
						</Button>
					</Stack>
				</Card>
			</CardList>
			<Modal isOpen={modal.isOpen} onClose={modal.onClose} title="After Shock">
				Описание
			</Modal>
		</>
	);
}
