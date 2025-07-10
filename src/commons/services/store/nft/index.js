import { request } from 'commons/api/111';

export const NftService = {
  getBySpeciesId(id) {
    return request.get(`/nfts?speciesId=${id}`);
  },
};
