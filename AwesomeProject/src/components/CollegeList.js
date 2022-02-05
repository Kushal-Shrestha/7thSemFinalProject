import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {View, Text, StyleSheet, ScrollView, Pressable} from 'react-native';
import {CustomButton} from './button';

const CollegeData = [
  {
    name: 'Amrit Science Campus',
    id: 1,
  },
  {
    name: 'Deerwalk Institute of Technology',
    id: 2,
  },
  {
    name: 'Kathmandu Bernhardt College',
    id: 3,
  },
  {
    name: 'Prime College',
    id: 4,
  },
  {
    name: 'Patan Multiple Campus',
    id: 5,
  },
];

function CollegeList() {
  const navigation = useNavigation();
  const onCollegeCardHandler = item => {
    console.log('pressed', item.name);
    navigation.navigate('SubjectList');
  };
  return (
    <ScrollView>
      {CollegeData.map(item => (
        <CustomButton
          onPress={() => onCollegeCardHandler(item)}
          key={item.id}
          title={item.name}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'red',
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
});

export default CollegeList;
