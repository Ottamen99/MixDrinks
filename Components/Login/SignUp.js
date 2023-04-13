import React, { Component } from "react";

import styles from "./style";
import { Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView } from 'react-native';
import { Button } from 'react-native-elements';
import * as firebase from 'firebase'

const appId = "1047121222092614"

const firebaseConfig = {
  apiKey: "AIzaSyBnQUqUdiJ7VDkxWplIpth2yhxbaRsQgHs",
  authDomain: "mix-n-drinks.firebaseapp.com",
  databaseURL: "https://mix-n-drinks.firebaseio.com",
  projectId: "mix-n-drinks",
  storageBucket: "mix-n-drinks.appspot.com",
  messagingSenderId: "949175954608",
  appId: "1:949175954608:web:a985615d42469196"
}

firebase.initializeApp(firebaseConfig)

export default class LoginScreen extends Component {

  constructor(props) {
    super(props)

    this.state = ({
      email: '',
      password: '',
      confirmPass: '',
    })
  }

  signUpUser = (email, password) => {
    if (this.state.password != this.state.confirmPass) {
      alert("Not matching passowrds")
      return;
    }
    firebase.auth().createUserWithEmailAndPassword(email, password).catch((error) => alert(error))
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.containerView} behavior="padding">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.loginScreenContainer}>
            <View style={styles.loginFormView}>
              <Text style={styles.logoText}>Mix'n Drinks</Text>
              <TextInput placeholder="Email" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} onChangeText={(email) => this.setState({ email })} />
              <TextInput placeholder="Password" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true} onChangeText={(password) => this.setState({ password })} />
              <TextInput placeholder="Confirm Password" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true} onChangeText={(confirmPass) => this.setState({ confirmPass })} />
              <Button
                buttonStyle={styles.loginButton}
                onPress={() => this.signUpUser(this.state.email, this.state.password)}
                title="Create account"
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  async onFbLoginPress() {
    const { type, token } = await Expo.Facebook.logInWithReadPermissionsAsync(appId, {
      permissions: ['public_profile', 'email'],
    });
    if (type === 'success') {
      const response = await fetch(
        `https://graph.facebook.com/me?access_token=${token}`);
      Alert.alert(
        'Logged in!',
        `Hi ${(await response.json()).name}!`,
      );
    }
  }
}
