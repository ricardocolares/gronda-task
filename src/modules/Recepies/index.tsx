import React from 'react';
import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Logo from '../../assets/logo.png';
import MasterClassBanner from './components/MasterClassBanner';
import RecepieCard from './components/RecepieCard';

const DATA = [
  {
    id: 1,
    category_id: 1,
    title: 'The Limit is The Sky',
    img_url: 'https://d2bn8tb344j6vy.cloudfront.net/JwOEa4hmYk/stories/vf.JPEG',
  },
  {
    id: 2,
    category_id: 2,
    title: 'Avocado Cream',
    img_url: 'https://d2bn8tb344j6vy.cloudfront.net/JwOEa4hmYk/stories/vf.JPEG',
  },
  {
    id: 3,
    category_id: 2,
    title: 'Sandwich',
    img_url: 'https://d2bn8tb344j6vy.cloudfront.net/JwOEa4hmYk/stories/vf.JPEG',
  },
  {
    id: 4,
    category_id: 2,
    title: '',
    img_url:
      'https://d2bn8tb344j6vy.cloudfront.net/JwOEa4hmYk/stories/q2b.JPEG',
  },
  {
    id: 5,
    category_id: 1,
    title: 'Panificando',
    img_url:
      'https://d2bn8tb344j6vy.cloudfront.net/W6eu9RP1pc/stories/thumbnail_ik.png',
  },
  {
    id: 6,
    category_id: 3,
    title: '',
    img_url: 'https://d2bn8tb344j6vy.cloudfront.net/An4jAVSUOQ/stories/qz.JPEG',
  },
  {
    id: 7,
    category_id: 1,
    title: 'Panificando',
    img_url:
      'https://d2bn8tb344j6vy.cloudfront.net/W6eu9RP1pc/stories/thumbnail_ik.png',
  },
  {
    id: 8,
    category_id: 3,
    title: '',
    img_url: 'https://d2bn8tb344j6vy.cloudfront.net/An4jAVSUOQ/stories/qz.JPEG',
  },
  {
    id: 9,
    category_id: 1,
    title: 'Panificando',
    img_url:
      'https://d2bn8tb344j6vy.cloudfront.net/W6eu9RP1pc/stories/thumbnail_ik.png',
  },
  {
    id: 10,
    category_id: 3,
    title: '',
    img_url: 'https://d2bn8tb344j6vy.cloudfront.net/An4jAVSUOQ/stories/qz.JPEG',
  },
  {
    id: 11,
    category_id: 3,
    title: '',
    img_url: 'https://d2bn8tb344j6vy.cloudfront.net/An4jAVSUOQ/stories/qz.JPEG',
  },
];

const Recepies = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} resizeMode={'center'} source={Logo} />

      <MasterClassBanner imageUri="https://d3566jsyo19arr.cloudfront.net/banner/marco_mueller_banner.jpg" />
      <FlatList
        data={DATA}
        renderItem={({item}) => (
          <RecepieCard img_url={item.img_url} title={item.title} />
        )}
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        keyExtractor={item => item.id.toString()}
        ListHeaderComponent={<Text style={styles.text}>Creation for you</Text>}
        ListFooterComponent={
          <View>
            <Text style={styles.text}>No more results</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
};

export default Recepies;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F9FD',
  },
  logo: {width: '100%', height: 100},

  listContainer: {
    width: Dimensions.get('window').width / 2 - 20,
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 20,
  },
  imageCard: {width: '100%', height: 162, borderRadius: 5},
  imageContainer: {
    margin: 15,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {width: '100%', height: undefined, aspectRatio: 1},

  nameText: {
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 15,
  },
  text: {fontWeight: 'bold', color: 'black', marginTop: 12},
});
