import React from 'react';
import Root from './app/root';
import { Provider } from 'react-redux'
import store from './app/store';

export default function App() {
  return (
    <Provider store={store}>
      <Root />
    </Provider>
  );
}
