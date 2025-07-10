import { PaymentService } from '@/services/payment';
import { useMutation, useQuery } from 'react-query';

export const usePaymentMethods = () =>
  useQuery('payment-methods', PaymentService.getMethods);

// export const usePaymentMethod = () =>

export const usePaymentCreate = () =>
  useMutation('payment-create', PaymentService.create);
