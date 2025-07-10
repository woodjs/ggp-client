import AuthHistory from './AuthHistory';

function AuthHistoryContainer() {
  /**
   * @type {import('./AuthHistory').HistoryItem[]}
   */
  const history = [
    {
      id: 0,
      browser: { name: 'Chrome on Windows' },
      device: { name: 'Dell XL 2xMass' },
      location: 'London, UK',
      date: '15, August 2020 15:08',
    },
    {
      id: 1,
      browser: { name: 'Safari on IOS' },
      device: { name: 'iPhone 11 Pro', type: 'phone' },
      location: 'London, UK',
      date: '12, August 2020 12:05',
    },
  ];
  return <AuthHistory history={history} />;
}

export default AuthHistoryContainer;
