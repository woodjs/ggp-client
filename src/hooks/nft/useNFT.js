import { NftService } from '@/services/nft';
import { useMutation, useQuery } from 'react-query';
import { toast } from 'react-toastify';

export const useNFTs = (payload, options = {}) =>
  useQuery([`nfts`, payload.categoryId], () => NftService.getAll(payload), {
    enabled: options.enabled,
  });

export const useBuyNFT = () =>
  useMutation('nft-buy', NftService.buy, {
    onSuccess: () => toast.success('Success'),
    onError: ({ message }) => toast.error(message),
  });

export const useMintNFT = () =>
  useMutation('nft-mint', NftService.mint, {
    onSuccess: () => toast.success('Success'),
    onError: ({ message }) => toast.error(message),
  });
