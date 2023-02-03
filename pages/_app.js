import React from 'react';
import App from 'next/app';
import {useStore} from 'react-redux';
import {wrapper} from '../redux/store';
import {PersistGate} from 'redux-persist/integration/react';

export default wrapper.withRedux(({Component, pageProps}) => {
  const store = useStore();
  return (
    <PersistGate persistor={store.__persistor} loading={<div>Loading</div>}>
      {/* <Component {...pageProps} /> */}
      { () => <Component {...pageProps} /> }
    </PersistGate>
  );
});
