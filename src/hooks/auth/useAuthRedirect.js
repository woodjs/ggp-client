export const authRedirect = (router) => {
  if (router.query.redirect) {
    return router.push(router.query.redirect);
  }

  return router.push('/account/store');
};
