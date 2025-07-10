export const HEADER_HTTP_TOKEN = 'X-AT';

// eslint-disable-next-line import/no-mutable-exports
let baseURL = process.env.SERVER_URL;

if (typeof window !== 'undefined') {
  if (process.env.NODE_ENV === 'production') {
    baseURL = process.env.SERVER_URL;
  }
}

export { baseURL };
