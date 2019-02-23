import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, FlatList } from 'react-native';
import SearchTabNavigator from '../Search/SearchTabNavigator'
import DrinksListTabNavigator from '../Drinks/ListDrinks'
import { createStackNavigator, createAppContainer, DrawerActions} from 'react-navigation'
import About from './About'


export default class App extends React.Component {
  static navigationOptions = ({ navigation }) => {
    parent = navigation.dangerouslyGetParent();
  };
  render() {
    return (
        <MyApp/>
    );
  }
}

var parent;

const AppNav = createStackNavigator({
  About: {
    screen: About,
    navigationOptions: ({navigation}) => ({
        title: 'About Mix\'n Drinks',
        headerLeft: (
          <TouchableHighlight onPress={() => { parent.openDrawer() }}>
            <Image
              style={styles.button}
              source={require('../../assets/menu.png')}
            />
          </TouchableHighlight>
        ),
      })
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