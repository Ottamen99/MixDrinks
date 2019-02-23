import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer, createDrawerNavigator} from 'react-navigation'
import SearchTabNavigator from './Components/Search/SearchTabNavigator'
import DrinksListTabNavigator from './Components/Drinks/ListDrinks'
import CocktailDetail from './Components/Cocktail/CocktailView'
import StackNav from './Components/Nav/Stack'
import MyBar from './Components/MyBar/MyBar'
import AboutNav from './Components/About/AboutNav'


export default class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <StackNav/>
      </React.Fragment>
    );
  }
}

const MyDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: StackNav,
      navigationOptions: ({navigation}) => 
            ({
                title: 'Drinks',
            }) 
    },
    MyBar: {
      screen: MyBar,
      navigationOptions: () => 
            ({
                title: 'My Bar'
            }) 
    },
    About: {
      screen: AboutNav,
      navigationOptions: () => 
            ({
                title: 'About'
            }) 
    },
  },
  {
    initialRouteName: 'About',
  },
);

export const SideMenu = createAppContainer(MyDrawerNavigator);