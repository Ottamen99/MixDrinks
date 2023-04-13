import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase'
import LoggedDrawer from './Components/Nav/LoggedDrawer'
import NotLoggedDrawer from './Components/Nav/NotLoggedDrawer'


export default class App extends React.Component {
  render() {
    return (
      1 == 1 ? <LoggedDrawer/> : <NotLoggedDrawer/>
    );
  }
}