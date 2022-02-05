import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {ScrollView} from 'react-native';
import {CustomButton} from './button';

const SubjectData = [
  {
    name: 'Artifical Intelligence',
    id: 1,
  },
  {
    name: 'Computer Networking',
    id: 2,
  },
  {
    name: 'Cyber Security',
    id: 3,
  },
  {
    name: 'Cryptography',
    id: 4,
  },
  {
    name: 'Data Science and Data Analysis',
    id: 5,
  },
  {
    name: 'Web Development',
    id: 6,
  },
];

function SubjectList() {
  const navigation = useNavigation();
  const SubjectCardHandler = item => {
    console.log('pressed', item.name);
    navigation.navigate('ResearchPaper');
  };
  return (
    <ScrollView>
      {SubjectData.map(item => (
        <CustomButton
          onPress={() => SubjectCardHandler(item)}
          key={item.id}
          title={item.name}
        />
      ))}
    </ScrollView>
  );
}

export default SubjectList;
