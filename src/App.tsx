import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Routes from './routes';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar />
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
