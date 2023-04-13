import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, FlatList } from 'react-native';
import SignUp from './SignUp'
import { createStackNavigator, createAppContainer, DrawerActions} from 'react-navigation'
import SignIn from './SignIn'


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
    SignIn: {
    screen: SignIn,
    navigationOptions: ({navigation}) => ({
        title: 'Login',
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
  SignUp: {
    screen: SignUp,
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