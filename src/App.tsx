/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Recepies from './modules/Recepies';
import RecepieDetails from './modules/Recepies/Screens/RecepieDetails';

const {Navigator, Screen} = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen name="Recepies" component={Recepies} />
        <Screen name="Details" component={RecepieDetails} />
      </Navigator>
    </NavigationContainer>
  );
};

export default App;
