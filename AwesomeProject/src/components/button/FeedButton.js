import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

export function FeedButton({title, onPress, active}) {
  return (
    <Pressable
      style={[styles.button, active && {...styles.activeButton}]}
      onPress={onPress}>
      <Text numberOfLines={1} style={styles.buttonText}>
        {title}
      </Text>
      <View style={styles.rightButton}>
        {active ? (
          <AntDesign name="checkcircleo" size={16} />
        ) : (
          <AntDesign name="pluscircleo" size={16} />
        )}
      </View>
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
    width: '90%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  buttonText: {
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  activeButton: {
    backgroundColor: '#6494FF',
  },
  rightButton: {},
});
