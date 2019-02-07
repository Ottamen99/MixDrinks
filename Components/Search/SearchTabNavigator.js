import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {createBottomTabNavigator, createAppContainer} from 'react-navigation'
import SearchTab from './tabNavigator/SearchTab'
import FavouriteTab from './tabNavigator/FavouriteTab'
import CategoryTab from './tabNavigator/CategoryTab'
import { Footer, FooterTab, Button, Icon } from 'native-base';
import { Ionicons, Entypo } from '@expo/vector-icons'; // 6.2.2

const getTabBarIcon = (navigation, focused, tintColor) => {
    const { routeName } = navigation.state;
    
    let IconComponent = Entypo;
    let iconName;
    if (routeName === 'Search') {
      iconName = `magnifying-glass`;
    } else if (routeName === 'Favourite') {
      iconName = `star`;
    } else if (routeName === 'Collection') {
      iconName = `drink`;
    }
  
    // You can return any component that you like here!
    return <IconComponent name={iconName} size={25} color={tintColor} />;
};

const SearchTabNavigator = createBottomTabNavigator({
    Collection: {screen: CategoryTab},
    Search: {screen: SearchTab},
    Favourite:{screen: FavouriteTab}
}, {
    defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, tintColor }) =>
          getTabBarIcon(navigation, focused, tintColor),
    }),
})

export default TabBar = createAppContainer(SearchTabNavigator)