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
import RecipiesList from './modules/Recepies/Screens/RecipiesLIst';
import RecipeDetails from './modules/Recepies/Screens/RecipeDetails';
import {QueryClient, QueryClientProvider} from 'react-query';
export type RootStackParamList = {
  Recipies: undefined;
  Details: {visits?: number};
};
const queryClient = new QueryClient();

const {Navigator, Screen} = createNativeStackNavigator<RootStackParamList>();
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Navigator>
          <Screen
            name="Recipies"
            component={RecipiesList}
            options={{headerShown: false}}
          />
          <Screen
            name="Details"
            component={RecipeDetails}
            options={{headerShown: false}}
          />
        </Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
};

export default App;
