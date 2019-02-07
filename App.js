import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer} from 'react-navigation'

import HomeScreen from './Components/Home/HomeScreen'
import SearchTabNavigator from './Components/Search/SearchTabNavigator'
import DrinksListTabNavigator from './Components/Drinks/ListDrinks'
import CocktailDetail from './Components/Cocktail/CocktailView'


const App = createStackNavigator({
  /*HomeScreen: {
    screen: HomeScreen,
    
  },*/
  SearchTabNavigator: {
    screen: SearchTabNavigator,
    navigationOptions: { header: null }
  },
  ListDrinksNavigator: {
    screen: DrinksListTabNavigator
  },
  CocktailDetail: {
    screen: CocktailDetail,
  },
})

export default MyApp = createAppContainer(App)