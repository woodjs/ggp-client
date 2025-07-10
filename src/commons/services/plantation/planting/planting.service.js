import { request } from 'commons/api/111';

export const PlantingService = {
  getBySpeciesId(speciesId) {
    return request.get(`/plantings/${speciesId}`);
  },
};
