import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';

type CardProps = {
  title: string;
  img_url: string;
};

export default function RecepieCard({img_url, title}: CardProps) {
  return (
    <View style={styles.listContainer}>
      <Image style={styles.imageCard} source={{uri: img_url}} />
      <Text style={styles.text}>{title}</Text>
    </View>
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
