import CabinetContent from '@/components/layout/Cabinet/CabinetContent';
import { Card, CardList } from '@/shared/ui';
import { BasketOrder } from '@/widgets/order/BasketOrder';
import { CheckoutForm } from '@/widgets/order/CheckoutForm';
import { OrderCreateCard } from '@/widgets/order/order-card-create';
import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Image,
  Input,
  NumberInput,
  Stack,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  Stepper,
  StepSeparator,
  StepStatus,
  StepTitle,
  Text,
  useColorModeValue,
  useNumberInput,
  useSteps,
  VStack,
} from '@chakra-ui/react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useState } from 'react';

function ProductCard({ color, image, onAdd }) {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 1,
      min: 1,
      max: 6,
      precision: 0,
    });

  const inputProps = getInputProps();
  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();

  const grams = parseInt(inputProps.value || 1);

  return (
    <Card
      p="20px"
      maxW="200px"
      w="full"
      position="relative"
      // bg={color}
    >
      <Image
        src={image}
        w="full"
        h="100px"
        objectFit="contain"
        position="absolute"
        top="-30px"
        left="50%"
        transform="translateX(-50%)"
        alt="Order Image"
      />

      <Text fontWeight="bold" fontSize="18px" textAlign="center" mt="50px">
        Royal Strawberry
      </Text>

      <Stack mt="10px">
        <Flex justify="space-between" fontSize="14px">
          <Text>Доступно</Text>
          <Text>до 5г</Text>
        </Flex>
        <HStack>
          <Button {...dec} size="xs">
            -
          </Button>
          <Input {...inputProps} size="xs" />
          <Button {...inc} size="xs">
            +
          </Button>
        </HStack>

        <Button size="sm" onClick={() => onAdd(grams)}>
          Добавить в корзину
        </Button>
      </Stack>
    </Card>
  );
}

const steps = [
  { title: 'Шаг 1', description: 'Выбор заказа' },
  { title: 'Шаг 2', description: 'Оформление' },
];

export default function CreateOrderPage() {
  const [cart, setCart] = useState([
    { name: 'Royal Strawberry', grams: 1 },
    { name: 'Royal Strawberry', grams: 10 },
  ]);
  const { activeStep, goToNext } = useSteps({
    index: 0,
    count: steps.length,
  });

  return (
    <CabinetContent bgImage="/images/bg/profile/dark.png" title="Create Order">
      <Stepper index={activeStep} mb="50px" colorScheme="teal">
        {steps.map((step, index) => (
          <Step key={index}>
            <StepIndicator>
              <StepStatus
                complete={<StepIcon />}
                incomplete={<StepNumber />}
                active={<StepNumber />}
              />
            </StepIndicator>

            <Box flexShrink="0">
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
            </Box>

            <StepSeparator />
          </Step>
        ))}
      </Stepper>
      {activeStep === 0 && (
        <Flex gap="20px" align="flex-start">
          {/* Продукты */}
          {/* <CardList>
            <ProductCard
              color="#54A495"
              image="https://html.merku.love/herbalist/img/index/hero02.webp"
              onAdd={(grams) =>
                handleAddToCart({ name: 'Royal Strawberry', grams })
              }
            />
          </CardList> */}

          {/* Корзина */}
          {/* <Box w="250px" bg="gray.800" p="4" rounded="md" color="white">
            <Text fontWeight="bold" mb="2">
              🛒 Ваша корзина
            </Text>
            {cart.length === 0 ? (
              <Text fontSize="sm">Корзина пуста</Text>
            ) : (
              <VStack spacing="2" align="stretch">
                {cart.map((item) => (
                  <Flex key={item.name} justify="space-between" align="center">
                    <Text>
                      {item.name} — {item.grams}г
                    </Text>
                    <Button
                      size="xs"
                      colorScheme="red"
                      onClick={() => handleRemove(item.name)}
                    >
                      ✕
                    </Button>
                  </Flex>
                ))}
                <Button size="sm" colorScheme="green" onClick={goToNext}>
                  Оформить заказ
                </Button>
              </VStack>
            )}
          </Box> */}

          <OrderCreateCard onNextStep={goToNext} />
        </Flex>
      )}
      {activeStep === 1 && (
        <Stack direction={['column', 'row']} spacing="20px">
          <CheckoutForm />
          <BasketOrder data={cart} />
        </Stack>
      )}
    </CabinetContent>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale ?? 'en', [
      'cabinet',
      'profile',
      'media',
      'global',
      'errors',
      'promo-modal',
    ])),
  },
});
