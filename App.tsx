import React from 'react';
import 'react-native-gesture-handler';
import { RootNavigation } from './src/navigation/rootNavigation';
import { Provider } from 'react-redux';
import { persistor, store } from './src/store/store';
import { PersistGate } from 'redux-persist/integration/react';


function App(): JSX.Element {



  return (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
                 <RootNavigation />
        </PersistGate>
    </Provider>
  );
}



export default App;
