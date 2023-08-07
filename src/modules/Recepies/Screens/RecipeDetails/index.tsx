import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {RootStackParamList} from '../../../../App';
import Back from '../../../../assets/back.png';

type Props = NativeStackScreenProps<RootStackParamList, 'Details'>;

const RecipeDetails: React.FC<Props> = ({navigation, route}) => {
  const {visits} = route.params;
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.backButtonArea}>
          <TouchableWithoutFeedback
            onPress={() => navigation.navigate('Recipies')}
            testID="back-button">
            <Image
              style={styles.backButton}
              resizeMode={'center'}
              source={Back}
            />
          </TouchableWithoutFeedback>
        </View>

        <View style={styles.visitisArea}>
          <Text
            style={styles.numberOfVisitsText}
            testID="number-of-visits-text">
            {visits}
          </Text>
          <Text style={styles.visitsText}>
            {visits === 1 ? 'Visit' : 'Visits'}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default RecipeDetails;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#075669',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  backButton: {
    width: '15%',
    height: 70,
  },
  backButtonArea: {
    flex: 1,
    margin: 10,
  },
  visitisArea: {
    flex: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberOfVisitsText: {color: '#FFFFFF', fontSize: 60},
  visitsText: {
    color: '#FFFFFF',
    fontSize: 24,
  },
});
