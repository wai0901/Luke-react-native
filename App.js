import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from './redux/configureStore';
import Main from './navigation/AppNavigator';

const store = configureStore();

export default function App() {
  return (
    <Provider store={store}>
        <Main />
    </Provider>
  );
}


