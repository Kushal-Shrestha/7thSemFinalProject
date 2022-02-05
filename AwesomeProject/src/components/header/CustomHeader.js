import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export function CustomHeader({title}) {
  return (
    <>
      <View style={styles.wrapper}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#6494FF',
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 30,
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 26,
  },
});
