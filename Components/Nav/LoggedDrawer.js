import React from "react";
import { createStackNavigator, createAppContainer, createDrawerNavigator} from 'react-navigation'
import DrinkStack from './Stack'
import MyBar from '../MyBar/MyBar'
import AboutNav from '../About/AboutNav'
import SignInNav from '../Login/SignInNav'

export class LoggedDrawer extends React.Component {
  render() {
    return (
        <LoggedDrawer/>
    );
  }
}

const connectedNavigator = createDrawerNavigator(
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
      Logout: {
        screen: SignInNav,
        navigationOptions: () => 
              ({
                  title: 'Logout'
              }) 
      },
    },
    {
      initialRouteName: 'Home',
    },
  );

  export default createAppContainer(connectedNavigator);