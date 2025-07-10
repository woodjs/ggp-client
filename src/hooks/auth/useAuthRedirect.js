export const useAuthRedirect = (router) => {
  if (router.query.redirect) {
    return router.push(router.query.redirect);
  }

  return router.push('/account/store');
};
