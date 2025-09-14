import { useMutation } from 'react-query';
import { useToast } from '@chakra-ui/react';
import { protectedAPI } from '@/shared/api';
import { useRouter } from 'next/router';

export const useCreateOrder = () => {
  const toast = useToast();
  const router = useRouter();
  // const queryClient = useQueryClient();

  const mutation = useMutation(
    async ({ items, delivery }) => {
      const response = await protectedAPI.post('/orders', {
        items,
        delivery,
      });
      return response;
    },
    {
      onSuccess: (data) => {
        toast({
          title: 'Success',
          description: `ID order: ${data.orderId}`,
          status: 'success',
          duration: 3000,
          isClosable: true,
        });

        router.push('/account/order');
      },
      onError: ({ message }) => {
        toast({
          title: 'Error',
          description: message || 'Не удалось создать заказ',
          status: 'error',
          duration: 4000,
          isClosable: true,
        });
      },
    }
  );

  return mutation;
};
