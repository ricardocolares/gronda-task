import React, {useEffect, useState} from 'react';
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
import {makeServer} from '../../server';
import MasterClassBanner from './components/MasterClassBanner';
import RecepieCard from './components/RecepieCard';

if (process.env.NODE_ENV === 'development') {
  if ((window as any).server) {
    (window as any).server.shutdown();
  }
  (window as any).server = makeServer();
}

const Recepies = () => {
  const [recepies, setRecepies] = useState();
  const [serverError, setServerError] = useState();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        let res = await fetch('/api/recepies');
        let data = await res.json();
        console.log(data);
        data.error ? setServerError(data.error) : setRecepies(data.recepies);
      } catch (error) {
        setServerError(error.message);
      }
    };

    console.log(recepies);

    fetchUsers();
  }, [recepies]);

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} resizeMode={'center'} source={Logo} />

      <MasterClassBanner imageUri="https://d3566jsyo19arr.cloudfront.net/banner/marco_mueller_banner.jpg" />
      <FlatList
        data={recepies}
        renderItem={({item}) => (
          <RecepieCard img_url={item.img_url} title={item.title} />
        )}
        numColumns={2}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        keyExtractor={item => item.id.toString()}
        ListHeaderComponent={<Text style={styles.text}>Creation for you</Text>}
        ListFooterComponent={
          <View>
            <Text style={styles.text}>no more results</Text>
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
