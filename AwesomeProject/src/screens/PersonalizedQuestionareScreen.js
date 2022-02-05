import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {Text, View, Image, StyleSheet, Button, Pressable} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Choice} from './../images';

function PersonalizedQuestionareScreen() {
  const navigation = useNavigation();
  const collegeListScreenHandler = () => {
    navigation.navigate('CollegeList');
  };
  const personalizedFeedScreenHandler = () => {
    navigation.navigate('PersonalizedFeed');
  };
  return (
    <ScrollView>
      <Image style={styles.image} source={Choice} />
      <View style={styles.descContainer}>
        <Text style={styles.welcomeText}>How Would You</Text>
        <Text style={styles.welcomeText}>Like To View the</Text>
        <Text style={styles.welcomeText}>Documentation</Text>
      </View>
      <View style={styles.buttonWrapper}>
        <Pressable style={styles.button} onPress={collegeListScreenHandler}>
          <Text style={styles.buttonText}>Colleges</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={personalizedFeedScreenHandler}>
          <Text style={styles.buttonText}>Personalized Feed</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  image: {
    maxHeight: 500,
    height: '50%',
    minHeight: 300,
    width: '100%',
    alignSelf: 'center',
  },
  descContainer: {
    marginTop: 20,
  },
  welcomeText: {
    fontSize: 20,
    textAlign: 'center',
  },
  signinText: {
    fontSize: 20,
    textAlign: 'center',
  },
  button: {
    margin: 10,
    color: 'black',
    paddingVertical: 5,
    paddingHorizontal: 5,
    backgroundColor: '#D3D3D3',
    borderRadius: 20,
    width: 200,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonWrapper: {
    marginTop: 20,
  },
  buttonText: {
    fontWeight: 'bold',
  },
});

export default PersonalizedQuestionareScreen;
