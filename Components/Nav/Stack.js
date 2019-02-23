import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, FlatList } from 'react-native';
import SearchTabNavigator from '../Search/SearchTabNavigator'
import DrinksListTabNavigator from '../Drinks/ListDrinks'
import { createStackNavigator, createAppContainer, DrawerActions} from 'react-navigation'
import CocktailDetail from '../Cocktail/CocktailView'


export default class App extends React.Component {
  static navigationOptions = ({ navigation }) => {
    parent = navigation.dangerouslyGetParent();
    console.log(parent);
    
  };
  render() {
    return (
        <MyApp/>
    );
  }
}

var parent;

const AppNav = createStackNavigator({
  SearchTabNavigator: {
    screen: SearchTabNavigator,
    navigationOptions: ({navigation}) => ({
        title: 'Mix\'n Drinks',
        /*headerLeft: (
          <TouchableHighlight onPress={() => { parent.openDrawer() }}>
            <Image
              style={styles.button}
              source={require('../../assets/menu.png')}
            />
          </TouchableHighlight>
        ),*/
      })
  },
  ListDrinksNavigator: {
    screen: DrinksListTabNavigator
  },
  CocktailDetail: {
    screen: CocktailDetail,
  },
})

export const MyApp = createAppContainer(AppNav)

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