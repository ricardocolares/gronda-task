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
import RecipeCard from './components/RecepieCard';

if (process.env.NODE_ENV === 'development') {
  if ((window as any).server) {
    (window as any).server.shutdown();
  }
  (window as any).server = makeServer();
}

type RecipieProps = {
  id: number;
  category_id?: number;
  title: string;
  img_url: string;
  views: number;
};

const ERROR_MESSAGE =
  'Sorry, we are having some internal issues. But dont worrie, our team is working to quickly fix it. Try again latter';

const Recipies: React.FC = ({navigation}) => {
  const [recipies, setRecipies] = useState<RecipieProps[]>();
  const [serverError, setServerError] = useState<string>();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch('/api/recipies');
        const data = await res.json();
        const formatedRecipies = data.recipies.map((recipie: RecipieProps) => ({
          ...recipie,
          views: 0,
        }));
        data.error ? setServerError(data.error) : setRecipies(formatedRecipies);
      } catch {
        setServerError(ERROR_MESSAGE);
      }
    };

    fetchUsers();
  }, [recipies]);

  const renderHeader = () => {
    return (
      <View>
        <MasterClassBanner imageUri="https://d3566jsyo19arr.cloudfront.net/banner/marco_mueller_banner.jpg" />
        <Text style={styles.text}>Creation for you</Text>
      </View>
    );
  };

  const renderFooter = () => {
    return (
      <View>
        <Text style={styles.text}>No more results</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} resizeMode={'center'} source={Logo} />

      {serverError ? (
        <Text testID="server-error">{serverError}</Text>
      ) : !recipies ? (
        <Text>Loading...</Text>
      ) : recipies.length === 0 ? (
        <Text testID="no-users">No recipies!</Text>
      ) : (
        <FlatList
          data={recipies}
          renderItem={({item}) => (
            <RecipeCard
              img_url={item.img_url}
              title={item.title}
              navigation={() =>
                navigation.navigate('Details', {
                  id: item.id,
                  count: item.views,
                  item,
                })
              }
            />
          )}
          numColumns={2}
          columnWrapperStyle={{justifyContent: 'space-between'}}
          keyExtractor={item => item.id.toString()}
          ListHeaderComponent={renderHeader}
          ListFooterComponent={renderFooter}
          onEndReachedThreshold={0.2}
        />
      )}
    </SafeAreaView>
  );
};

export default Recipies;

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
