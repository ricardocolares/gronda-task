import {NativeStackScreenProps} from '@react-navigation/native-stack';
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
import {RootStackParamList} from '../../../../App';
import Logo from '../../../../assets/logo.png';
import {makeServer} from '../../../../server';
import PageHeader from '../../components/PageHeader';
import RecipeCard from '../../components/RecepieCard';

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
};

type ViewsProps = {
  id: number;
  views: number;
};

type Props = NativeStackScreenProps<RootStackParamList, 'Recipies'>;

const ERROR_MESSAGE = 'Sorry, try again latter';

const RecipiesList: React.FC<Props> = ({navigation}) => {
  const [recipies, setRecipies] = useState<RecipieProps[]>();
  const [recipiesViews, setRecipiesViews] = useState<ViewsProps[]>([]);
  const [serverError, setServerError] = useState<string>();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch('/api/recipies');
        const data = await res.json();
        data.error ? setServerError(data.error) : setRecipies(data.recipies);
      } catch {
        setServerError(ERROR_MESSAGE);
      }
    };

    fetchUsers();
  }, [recipies]);

  const handleVisitsCount = (id: number): ViewsProps[] => {
    const recipieWithViews = recipiesViews.find(recipe => recipe.id === id);

    if (!recipieWithViews) {
      const newRecipeView = {id, views: 1};
      setRecipiesViews([...recipiesViews, newRecipeView]);
      return [newRecipeView];
    }

    const updatedViews = recipieWithViews.views + 1;
    const updatedRecipeViews = recipiesViews.map(recipe =>
      recipe.id === id ? {...recipe, views: updatedViews} : recipe,
    );

    setRecipiesViews(updatedRecipeViews);
    return updatedRecipeViews;
  };

  const handleNavigation = (id: number) => {
    const views = handleVisitsCount(id);
    const result = views.find(obj => obj.id === id);
    return navigation.navigate('Details', {
      visits: result?.views,
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.logo} resizeMode={'center'} source={Logo} />

      {serverError ? (
        <Text testID="server-error">{serverError}</Text>
      ) : !recipies ? (
        <View testID="no-recipies" style={styles.main}>
          <Text>Loading...</Text>
        </View>
      ) : recipies.length === 0 ? (
        <Text testID="no-recipies">No recipies!</Text>
      ) : (
        <FlatList
          testID="recipies-list"
          data={recipies}
          renderItem={({item}) => (
            <RecipeCard
              testID="recipe-card"
              img_url={item.img_url}
              title={item.title}
              navigation={() => handleNavigation(item.id)}
            />
          )}
          numColumns={2}
          keyExtractor={item => item.id.toString()}
          ListHeaderComponent={<PageHeader />}
          onEndReachedThreshold={0.2}
        />
      )}
    </SafeAreaView>
  );
};

export default RecipiesList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F9FD',
  },
  main: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
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
  text: {fontWeight: 'bold', color: '#333333', margin: 12, fontSize: 19},
});
