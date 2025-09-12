module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['ru', 'en', 'es', 'fr', 'th'],
    keySeparator: false,
  },
  localePath:
    typeof window === 'undefined'
      ? require('path').resolve('./public/locales')
      : '/locales',

  reloadOnPrerender: process.env.NODE_ENV === 'development',
};
