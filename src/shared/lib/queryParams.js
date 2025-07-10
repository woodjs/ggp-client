export const JSONToQueryParams = (data) => {
  if (!data || !Object.keys(data).length) return '';
  const queryParams = Object.keys(data)
    .filter(
      (key) => data[key] !== null && data[key] !== undefined && data[key] !== ''
    )
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join('&');

  return `${queryParams}`;
};
