const { request } = require('commons/api');

module.exports.NftService = {
  getAll(payload) {
    const paramsURI = new URLSearchParams();
    if (payload) {
      Object.keys(payload).forEach((key) => {
        if (payload[key]) paramsURI.append(key, payload[key]);
      });
    }
    return request.get(`/nfts?${paramsURI.toString()}`);
  },
  getBySpeciesIdAndPlantingId(speciesId, plantingId) {
    if (speciesId === 2) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([
            {
              id: 1,
              name: 'APPLE_CUSTARD',
              price: 106.24,
              percent: 45,
              income: '22/78',
              image: '/images/store/compressed/part.webp',
              isLimited: 1,
              basePrice: 100,
            },
            {
              id: 2,
              name: 'GORILLA_ZKITTLEZ',
              price: 213.44,
              percent: 50,
              income: '25/75',
              image: '/images/store/compressed/bush.webp',
              isLimited: 1,
              basePrice: 200,
            },
            {
              id: 3,
              name: 'GRANITA',
              price: 1080.16,
              percent: 60,
              income: '30/70',
              image: '/images/store/compressed/shelf.webp',
              isLimited: 1,
              basePrice: 1000,
            },
            {
              id: 4,
              name: 'KORLEONE_KUSH',
              price: 1968,
              percent: 70,
              income: '35/65',
              image: '/images/store/compressed/sector.webp',
              isLimited: 1,
              basePrice: 1800,
            },
            {
              id: 5,
              name: 'MIRACLE_CHERRY',
              price: 5976,
              percent: 80,
              income: '40/60',
              image: '/images/store/compressed/rack.webp',
              isLimited: 1,
              basePrice: 5400,
            },
          ]);
        }, 1000);
      });
    }
    return request.get(`/nfts/species/${speciesId}/planting/${plantingId}`);
  },

  /**
   *
   * @param {{
   *  nftId: number;
   *  plantingId: number;
   * }} payload
   * @returns
   */
  buy(payload) {
    return request.post('/v2/users/nfts', payload);
  },

  findAll(address) {
    const paramsURI = new URLSearchParams();
    if (address) paramsURI.append('address', address);
    return request.get(`/users/nft?${paramsURI.toString()}`);
  },
  findById(id) {
    return request.get(`/users/nft/${id}`);
  },
  create(payload) {
    return request.post('/users/nft', payload);
  },
};
