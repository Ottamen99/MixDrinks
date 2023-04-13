import React from "react";
import { createStackNavigator, createAppContainer, createDrawerNavigator} from 'react-navigation'
import DrinkStack from './Stack'
import MyBar from '../MyBar/MyBar'
import AboutNav from '../About/AboutNav'
import SignInNav from '../Login/SignInNav'

export class NotLoggedDrawer extends React.Component {
  render() {
    return (
        <NotLoggedDrawer/>
    );
  }
}

const notConnectedNavigator = createDrawerNavigator(
    {
      Home: {
        screen: DrinkStack,
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
      SignIn: {
        screen: SignInNav,
        navigationOptions: () => 
              ({
                  title: 'Sign in'
              }) 
      },
    },
    {
      initialRouteName: 'Home',
    },
  );

  export default createAppContainer(notConnectedNavigator);