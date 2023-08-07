import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

type CardProps = {
  title: string;
  img_url: string;
  navigation: () => void;
};

export default function RecepieCard({img_url, title, navigation}: CardProps) {
  return (
    <TouchableWithoutFeedback onPress={navigation} testID="recipe-card">
      <View style={styles.listContainer} testID="recipe-card">
        <Image style={styles.imageCard} source={{uri: img_url}} />
        <Text style={styles.text}>{title ? title : 'Recipe'}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    width: Dimensions.get('window').width / 2 - 20,
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 20,
  },
  imageCard: {width: '100%', height: 162, borderRadius: 5},
  text: {fontWeight: 'bold', marginTop: 12, color: '#333333', fontSize: 17},
});
