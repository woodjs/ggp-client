import { GoogleAuthenticatorService } from '@/services/google-authenticator';
import { useQuery } from 'react-query';

export const useGA = (isOpen) =>
  useQuery('ga-qrcode', GoogleAuthenticatorService.getData, {
    enabled: !!isOpen,
  });
