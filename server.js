require('dotenv').config({
  path: `.env.production.local`,
});
const cli = require('next/dist/cli/next-start');

cli.nextStart({ '--port': Number(process.env.PORT) || 3000, _: [] });
