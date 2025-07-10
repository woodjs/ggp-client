const { protectedAPI } = require('@/shared/api');

module.exports.NewsService = {
  /**
   *
   * @param {number} page
   * @returns
   */
  getAll(page = 1) {
    return protectedAPI.get(`/news?page=${page}`);
  },

  getById(id) {
    return protectedAPI.get(`/news/${id}`);
  },
};
