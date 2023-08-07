import React from 'react';
import {Dimensions, ImageBackground, StyleSheet} from 'react-native';
import CustomText from '../../../components/CustomText';

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
      <CustomText
        children="NEW"
        textColor="#ffffff"
        textSize={12}
        fontWeight="bold"
      />
      <CustomText
        children="Fish preparation like a star chef"
        textSize={24}
        textColor="#FFFFFF"
      />
      <CustomText
        children="With Rolf Fliegauf"
        textColor="#ffffff"
        textSize={12}
      />
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
