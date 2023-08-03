import React from 'react';
import {Dimensions, ImageBackground, StyleSheet, Text} from 'react-native';

type BannerProps = {
  imageUri: string;
};

export default function MasterClassBanner({imageUri}: BannerProps) {
  return (
    <ImageBackground
      source={{
        uri: imageUri,
      }}
      style={styles.masterClassImage}
      imageStyle={{borderRadius: 6}}>
      <Text style={{color: '#fff', fontWeight: 'bold', fontSize: 12}}>NEW</Text>
      <Text style={{color: '#fff', fontSize: 24}}>
        Fish preparation like {'\n'}a star chef
      </Text>
      <Text style={{color: '#fff', fontSize: 12}}>With Rolf Fliegauf</Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  masterClassImage: {
    width: Dimensions.get('window').width - 20,
    height: 170,
    marginHorizontal: 20,
    marginBottom: 32,
    padding: 20,
    display: 'flex',
    justifyContent: 'space-evenly',
    alignSelf: 'center',
  },
});
