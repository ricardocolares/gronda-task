import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import Logo from '../../assets/logo.png';

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
    id: 3,
    category_id: 2,
    title: 'Desayuno',
    img_url: 'https://d2bn8tb344j6vy.cloudfront.net/4BHK6UC1U1/stories/8l.JPEG',
  },
  {
    id: 6,
    category_id: 3,
    title: '',
    img_url: 'https://d2bn8tb344j6vy.cloudfront.net/An4jAVSUOQ/stories/qz.JPEG',
  },
  {
    id: 3,
    category_id: 2,
    title: 'Desayuno',
    img_url: 'https://d2bn8tb344j6vy.cloudfront.net/4BHK6UC1U1/stories/8l.JPEG',
  },
];

const Item = ({title, img_url}) => {
  return (
    <View
      style={{
        flex: 1,
        marginHorizontal: 8,
        paddingHorizontal: 8,
        borderWidth: 1,
        borderColor: 'red',
      }}>
      <Image
        style={{width: '100%', height: 162, borderRadius: 5}}
        source={{uri: img_url}}
      />
      <Text>{title}</Text>
    </View>
  );
};

const Recepies = () => {
  return (
    <SafeAreaView>
      <Image
        style={{width: '100%', height: 100}}
        resizeMode={'center'}
        source={Logo}
      />

      <Image
        source={{
          uri: 'https://d3566jsyo19arr.cloudfront.net/banner/marco_mueller_banner.jpg',
        }}
        style={{
          width: '100%',
          height: 120,
          borderRadius: 5,
          marginBottom: 32,
          marginHorizontal: 16,
          borderWidth: 1,
          borderColor: 'red',
        }}
      />
      <Text style={{margin: 16}}>Creation for you</Text>
      <FlatList
        data={DATA}
        renderItem={({item}) => (
          <Item img_url={item.img_url} title={item.title} />
        )}
        numColumns={2}
        ListFooterComponent={
          <View>
            <Text>No more results</Text>
          </View>
        }
      />
    </SafeAreaView>
  );
};

export default Recepies;
