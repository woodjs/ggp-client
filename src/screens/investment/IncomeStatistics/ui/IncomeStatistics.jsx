// import { Card } from '@/shared/ui';
// import { CardHeader, Heading } from '@chakra-ui/react';

import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Flex,
  Heading,
  IconButton,
  Image,
  SimpleGrid,
  Stack,
  Stat,
  StatHelpText,
  StatLabel,
  StatNumber,
  Text,
} from '@chakra-ui/react';
import { BsThreeDotsVertical } from 'react-icons/bs';

const stats = [
  { label: 'Total Subscribers', value: '71,887' },
  { label: 'Avg. Open Rate', value: '56.87%' },
  { label: 'Avg. Click Rate', value: '12.87%' },
];

export function IncomeStatistics() {
  return (
    <Card maxW="full">
      <CardHeader>
        <Heading size="md">Статистика дохода</Heading>
        {/* <Flex spacing="4">
          <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
            <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />

            <Box>
              <Heading size="sm">Segun Adebayo</Heading>
              <Text>Creator, Chakra UI</Text>
            </Box>
          </Flex>
          <IconButton
            variant="ghost"
            colorScheme="gray"
            aria-label="See menu"
            icon={<BsThreeDotsVertical />}
          />
        </Flex> */}
      </CardHeader>
      <CardBody>
        {/* <Flex justifyContent="space-between"></Flex> */}
        <SimpleGrid
          columns={{ base: 1, md: 3 }}
          gap={{ base: '5', md: '6' }}
          // justifyItems="center"
          justifyContent="center"
        >
          <Stat>
            <StatLabel>Сумма активов</StatLabel>
            <StatNumber fontWeight="bold">100 USDT</StatNumber>
          </Stat>
          <Stat>
            <StatLabel>Месячный доход</StatLabel>
            <StatNumber fontWeight="bold">50 USDT</StatNumber>
          </Stat>
          <Stat>
            <StatLabel>Годовой доход</StatLabel>
            <StatNumber fontWeight="bold">1000 USDT</StatNumber>
          </Stat>
        </SimpleGrid>
        {/* <Image
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">Living room Sofa</Heading>
          <Text>
            This sofa is perfect for modern tropical spaces, baroque inspired
            spaces, earthy toned spaces and for people who love a chic design
            with a sprinkle of vintage design.
          </Text>
          <Text color="blue.600" fontSize="2xl">
            $450
          </Text>
        </Stack> */}
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            Buy now
          </Button>
          <Button variant="ghost" colorScheme="blue">
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}
