import React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import { Provider } from 'react-redux';
import store from './src/redux';
import { Navigator } from './src/routes';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: 'tomato',
    accent: 'yellow',
  },
};

const App = () => {
  return <Provider store={store} >
    <PaperProvider theme={theme} >
      <Navigator />
    </PaperProvider>
  </Provider> 
};

export default App;
