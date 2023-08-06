import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MasterClassBanner from './MasterClassBanner';

// import { Container } from './styles';

const PageHeader: React.FC = () => {
  return (
    <View>
      <MasterClassBanner imageUri="https://d3566jsyo19arr.cloudfront.net/banner/marco_mueller_banner.jpg" />
      <Text style={styles.text}>Creation for you</Text>
    </View>
  );
};

export default PageHeader;

const styles = StyleSheet.create({
  text: {fontWeight: 'bold', color: '#333333', margin: 12, fontSize: 19},
});
