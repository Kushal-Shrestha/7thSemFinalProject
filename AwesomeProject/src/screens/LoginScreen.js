import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Text, View, Image, StyleSheet, Button} from 'react-native';
import { auth } from '../firebase/config';
import {Login} from './../images';

function LoginScreen() {
  const navigation = useNavigation();
  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword('kushalshrestha9980@gmail.com', 'Kushal1@#')
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Registered with:', user.email);
      })
      .catch(error => alert(error.message))
  }

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Logged in with:', user.email);
      })
      .catch(error => alert(error.message))
  }
  const PersonalizedScreeHandler = () => {
    navigation.navigate('PersonalizedQuestionare');
  };
  return (
    <View>
      <Image style={styles.image} source={Login} />
      <Text style={styles.welcomeText}>Welcome</Text>
      <Text style={styles.signinText}>Please Sign In To Continue</Text>
      <View style={styles.loginButton}>
        <Button
          title="Sign In With Google"
          onPress={PersonalizedScreeHandler}
        />
      </View>
      <View style={styles.loginButton}>
        <Button
          title="Sign Up"
          onPress={handleSignUp}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 300,
    width: 415,
  },
  welcomeText: {
    fontSize: 40,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  signinText: {
    fontSize: 20,
    textAlign: 'center',
  },
  loginButton: {
    margin: 40,
  },
});

export default LoginScreen;
