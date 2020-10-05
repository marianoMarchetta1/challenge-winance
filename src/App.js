import React from 'react';
import { Provider } from 'react-redux';
import Root from './app/root';
import store from './app/store';

export default function App() {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
}
