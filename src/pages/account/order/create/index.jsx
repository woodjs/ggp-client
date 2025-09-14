import CabinetContent from '@/components/layout/Cabinet/CabinetContent';
import { BasketOrder } from '@/widgets/order/BasketOrder';
import { CheckoutForm } from '@/widgets/order/CheckoutForm';
import { OrderCreateCard } from '@/widgets/order/order-card-create';
import { useCreateOrder } from '@/widgets/products';
import {
  useSteps,
  Step,
  StepIndicator,
  StepStatus,
  StepIcon,
  StepNumber,
  StepSeparator,
  StepTitle,
  StepDescription,
  Flex,
  Stack,
  Box,
  Stepper,
  Center,
} from '@chakra-ui/react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
// import { useCart } from '@/hooks/use-cart';

export default function CreateOrderPage() {
  const { t } = useTranslation('orders');

  const [orderData, setOrderData] = useState({
    items: [], // выбранные сорта и граммы
    delivery: {}, // данные доставки
  });

  const steps = [
    { title: `${t('step')} 1`, description: t('order_selection') },
    { title: `${t('step')} 2`, description: t('checkout') },
  ];

  const { activeStep, goToNext } = useSteps({
    index: 0,
    count: steps.length,
  });

  const { mutateAsync: createOrder, isLoading } = useCreateOrder();

  const handleNextFromOrder = (items) => {
    setOrderData((prev) => ({ ...prev, items }));
    goToNext();
  };

  const handleSubmitDelivery = async (deliveryData) => {
    const finalData = { ...orderData, delivery: deliveryData };
    try {
      await createOrder(finalData);
      // После успешного создания заказа можно перейти на страницу успеха
    } catch (err) {
      console.error('Ошибка при создании заказа:', err);
    }
  };

  return (
    <CabinetContent bgImage="/images/bg/profile/dark.png" title="Create Order">
      <Stepper index={activeStep} mb="50px" colorScheme="teal">
        {steps.map((step, idx) => (
          <Step key={idx}>
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
          <OrderCreateCard onNextStep={handleNextFromOrder} />
        </Flex>
      )}

      {activeStep === 1 && (
        <Stack direction={['column', 'row']} spacing="20px">
          <Center w="full">
            <CheckoutForm
              onSubmit={handleSubmitDelivery}
              isDisabled={isLoading}
            />
          </Center>
          {/* Можно добавить корзину или обзор заказа */}
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
      'orders',
    ])),
  },
});
