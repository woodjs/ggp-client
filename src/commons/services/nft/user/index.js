import { protectedAPI } from '@/shared/api';

export const UserNFTService = {
  getAll(address = null) {
    let url = '/users/nfts';

    if (address) url += `?address=${address}`;

    return protectedAPI.get(url);
  },
  getById(id) {
    return protectedAPI.get(`/users/nfts/${id}/info`);
  },

  getPriceForMint(id, address) {
    return protectedAPI.get(`/users/nfts/${id}/mint-price?address=${address}`);
  },
  mint({ id, address }) {
    return protectedAPI.post(`/users/nfts/${id}/mint`, { address });
  },
};
