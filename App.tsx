import React from 'react';
import 'react-native-gesture-handler';
import { RootNavigation } from './src/navigation/rootNavigation';
import { Provider } from 'react-redux';
import { store } from './src/store/store';


function App(): JSX.Element {



  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  );
}


export default App;
