import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer} from 'react-navigation'

import HomeScreen from './Components/Home/HomeScreen'
import SearchTabNavigator from './Components/Search/SearchTabNavigator'
import DrinksListTabNavigator from './Components/Drinks/ListDrinks'
import CocktailDetail from './Components/Cocktail/CocktailView'


const App = createStackNavigator({
  HomeScreen: {
    screen: HomeScreen
  },
  SearchTabNavigator: {
    screen: SearchTabNavigator
  },
  ListDrinksNavigator: {
    screen: DrinksListTabNavigator
  },
  CocktailDetail: {
    screen: CocktailDetail
  },
}, {
  initialRouteName: 'SearchTabNavigator'
})

export default MyApp = createAppContainer(App)