import { protectedAPI } from '@/shared/api';
import { useQuery } from 'react-query';

export const useTelegramKey = () =>
  useQuery('telegram-key', () => protectedAPI.get('/user/telegram/key'));
export const useTelegram = () =>
  useQuery('user-telegram', () => protectedAPI.get('/user/telegram'));
