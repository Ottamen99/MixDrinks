import React from 'react';
import { StyleSheet, Image, TouchableHighlight } from 'react-native';
import SearchTabNavigator from '../Search/SearchTabNavigator'
import DrinksListTabNavigator from '../Drinks/ListDrinks'
import { createStackNavigator, createAppContainer} from 'react-navigation'
import CocktailDetail from '../Cocktail/CocktailView'
import About from '../About/AboutNav'


export default class DrinkStackNavigator extends React.Component {
  static navigationOptions = ({ navigation }) => {
    parent = navigation.dangerouslyGetParent();
    
  };
  render() {
    return (
        <DrinkStack/>
    );
  }
}

var parent;

const AppNav = createStackNavigator({
  SearchTabNavigator: {
    screen: SearchTabNavigator,
    navigationOptions: ({navigation}) => ({
        title: 'Mix\'n Drinks',
        headerLeft: (
          <TouchableHighlight onPress={() => { parent.openDrawer() }}>
            <Image
              style={styles.button}
              source={require('../../assets/menu.png')}
            />
          </TouchableHighlight>
        ),
        headerRight: (
          <TouchableHighlight onPress={() => { navigation.navigate() }}>
            <Image
              style={styles.button}
              source={require('../../assets/menu.png')}
            />
          </TouchableHighlight>
        ),
      })
  },
  ListDrinksNavigator: {
    screen: DrinksListTabNavigator
  },
  CocktailDetail: {
    screen: CocktailDetail,
  },
})

export const DrinkStack = createAppContainer(AppNav)

// ----------------------------------------------------------------
// Style
// ----------------------------------------------------------------
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#757DE8',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      alignItems: 'center',
      marginLeft: 10,
    },
  });