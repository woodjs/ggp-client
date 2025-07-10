module.exports = {
  i18n: {
    defaultLocale: 'ru',
    locales: ['ru', 'en', 'es'],
    keySeparator: false,
  },
  localePath:
    typeof window === 'undefined'
      ? require('path').resolve('./public/locales')
      : '/locales',

  reloadOnPrerender: process.env.NODE_ENV === 'development',
};
