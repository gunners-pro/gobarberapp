
import React, { useEffect } from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './routes/index';
import AppProvider from './hooks';
import SplashScreen from 'react-native-splash-screen';

const App: React.FC = () => {

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return(
    <NavigationContainer>
    <StatusBar barStyle="light-content" backgroundColor="#312e38" />
    <AppProvider>
      <View style={{ flex: 1, backgroundColor: '#312e38' }}>
        <Routes />
      </View>
    </AppProvider>
  </NavigationContainer>
  );
};

export default App;
