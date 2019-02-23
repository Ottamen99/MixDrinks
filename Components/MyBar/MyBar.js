import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {createBottomTabNavigator, createAppContainer} from 'react-navigation'
import Cocktails from './Tabs/Cocktails'
import Ingredients from './Tabs/Ingredients'
import { Footer, FooterTab, Button, Icon } from 'native-base';
import { Ionicons, Entypo } from '@expo/vector-icons'; // 6.2.2

const getTabBarIcon = (navigation, focused, tintColor) => {
    const { routeName } = navigation.state;
    
    let IconComponent = Entypo;
    let iconName;
    if (routeName === 'Ingredients') {
      iconName = `bowl`;
    } else if (routeName === 'Cocktails') {
      iconName = `drink`;
    }
  
    // You can return any component that you like here!
    return <IconComponent name={iconName} size={25} color={tintColor} />;
};

const SearchTabNavigator = createBottomTabNavigator({
    //Random:{screen: RandomTab},
    Ingredients: {screen: Ingredients},
    Cocktails: {screen: Cocktails},
    //Favourite:{screen: FavouriteTab},
    
}, {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarOptions: {
        activeTintColor: '#fb7900',
      },
        tabBarIcon: ({ focused, tintColor }) =>
          getTabBarIcon(navigation, focused, tintColor),}),
})

export default TabBar = createAppContainer(SearchTabNavigator)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        