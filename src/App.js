import React from 'react';

import createRoute from './routes';

export default function App() {
  const Routes = createRoute(false);

  return <Routes />;
}
