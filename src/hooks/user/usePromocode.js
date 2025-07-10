import { PromocodeService } from '@/services/promocode';
import { useCallback, useState } from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';

function usePromocode(value) {
  return useQuery(
    ['promocode'],
    () => {
      if (!value) return null;
      return PromocodeService.getByValue(value);
    },
    {
      enabled: false,
      onError: ({ message }) => toast.error(message),
    }
  );

  const [promocode, setPromocode] = useState(null);
  const [promocodeValue, setPromocodeValue] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isActivated, setIsActivated] = useState(false);
  const activatePromocode = useCallback(async () => {
    if (!promocodeValue) {
      return;
    }
    setIsLoading(true);
    setIsActivated(false);
    // setTimeout(() => {
    // if (promocodeValue === '123') {
    //   setPromocode({
    //     code: '123',
    //     amount: 10,
    //     type: 'percent',
    //   });
    //   setIsActivated(true);
    // }
    // if (promocodeValue === '456') {
    //   setPromocode({
    //     code: '456',
    //     amount: 100,
    //     type: 'fixed',
    //   });
    //   setIsActivated(true);
    // }

    const result = await PromocodeService.getByValue(promocodeValue).catch(
      () => false
    );
    if (!result) return;

    setPromocode({
      code: promocodeValue,
      type: 'fixed',
      amount: 100,
    });
    setIsLoading(false);
  }, [promocodeValue]);
  const deactivatePromocode = useCallback(() => {
    setPromocode(null);
    setIsActivated(false);
  }, []);
  return {
    promocode,
    isLoading,
    isActivated,
    activatePromocode,
    deactivatePromocode,
    value: promocodeValue,
    setValue: setPromocodeValue,
  };
}

export default usePromocode;
