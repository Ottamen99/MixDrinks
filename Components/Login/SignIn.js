import React, { Component } from "react";

import styles from "./style";
import { Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView } from 'react-native';
import { Button } from 'react-native-elements';
import * as firebase from 'firebase'

const appId = "1047121222092614"

export default class LoginScreen extends Component {
  constructor(props) {
    super(props)

    this.state = ({
      email: '',
      password: '',
    })
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.containerView} behavior="padding">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.loginScreenContainer}>
            <View style={styles.loginFormView}>
              <Text style={styles.logoText}>Mix'n Drinks</Text>
              <TextInput autoCapitalize="none" placeholder="Email" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} onChangeText={(email) => this.setState({ email })} />
              <TextInput placeholder="Password" placeholderColor="#c4c3cb" style={styles.loginFormTextInput} secureTextEntry={true} onChangeText={(password) => this.setState({ password })} />
              <Button
                buttonStyle={styles.loginButton}
                onPress={() => this.onLoginPress(this.state.email, this.state.password)}
                title="Login"
              />
              <Button
                buttonStyle={styles.loginButton}
                onPress={() => this.onRegisterPress()}
                title="Register"
              />
              <Button
                buttonStyle={styles.fbLoginButton}
                onPress={() => this.onFbLoginPress()}
                title="Login with Facebook"
                color="#3897f1"
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

  onRegisterPress() {
    this.props.navigation.navigate('SignUp')
  }

  onLoginPress(email, password) {
    if (!email) {
      alert("Please fill email")
      return;
    } else if (!password) {
      alert("Please fill password")
      return;
    }
    firebase.auth().signInWithEmailAndPassword(email, password)
      .catch((error) => alert(error))
      .then(() => this.props.navigation.navigate('Home'))
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
