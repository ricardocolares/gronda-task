import React from 'react';
import {Text, View} from 'react-native';

const RecipeDetails: React.FC = ({navigation, route}) => {
  const {id, count, item} = route.params;
  return (
    <View>
      <Text>{id}</Text>
      <Text>Views: {count}</Text>
    </View>
  );
};

export default RecipeDetails;
