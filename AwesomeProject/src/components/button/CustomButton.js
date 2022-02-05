import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';

export function CustomButton({title, onPress}) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
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
  buttonText: {
    fontWeight: 'bold',
  },
});
