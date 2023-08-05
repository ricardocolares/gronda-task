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
  const handleNavigation = () => {
    navigation();
  };
  return (
    <TouchableWithoutFeedback onPress={handleNavigation}>
      <View style={styles.listContainer}>
        <Image style={styles.imageCard} source={{uri: img_url}} />
        <Text style={styles.text}>{title}</Text>
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
  text: {fontWeight: 'bold', color: 'black', marginTop: 12},
});
