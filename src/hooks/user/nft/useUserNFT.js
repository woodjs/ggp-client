import { UserNFTService } from '@/services/nft/user';
import { useQuery } from 'react-query';

export const useUserNFTs = (address) =>
  useQuery(['user-nfts', address], () => UserNFTService.getAll(address));

export const useUserNFT = (id) =>
  useQuery(`user-nft-${id}`, () => UserNFTService.getById(id), {
    enabled: !!id,
  });
