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
import Recipies from './modules/Recepies';
import RecipeDetails from './modules/Recepies/Screens/RecipeDetails';

const {Navigator, Screen} = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Navigator>
        <Screen
          name="Recipies"
          component={Recipies}
          options={{headerShown: false}}
        />
        <Screen
          name="Details"
          component={RecipeDetails}
          options={{headerShown: false}}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default App;
