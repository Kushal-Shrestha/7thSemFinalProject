import React, {useState} from 'react';
import {StyleSheet, FlatList, View} from 'react-native';
import {FeedButton} from './button';

const FeedData = [
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

function FeedList() {
  const [selectedFeed, setSelectedFeed] = useState([]);
  const onCollegeCardHandler = item => {
    if (selectedFeed.length === 0) {
      setSelectedFeed(prev => [...prev, item.id]);
      return;
    }
    setSelectedFeed(prev => {
      const prevData = [...prev];
      return prevData.includes(item.id)
        ? prevData.filter(filterItem => filterItem !== item.id)
        : [...prev, item.id];
    });
  };

  const renderItem = ({item, index}) => {
    return (
      <View style={styles.feedContainer}>
        <FeedButton
          active={selectedFeed?.includes(item.id) ? true : false}
          onPress={() => onCollegeCardHandler(item)}
          key={item.id}
          title={item.name}
        />
      </View>
    );
  };
  return (
    <FlatList
      contentContainerStyle={{
        flex: 1,
        width: '100%',
      }}
      keyExtractor={(item, index) => item.id}
      style={{flex: 1}}
      data={FeedData}
      renderItem={renderItem}
      numColumns={2}
    />
  );
}

const styles = StyleSheet.create({
  feedContainer: {
    flex: 1,
    margin: 5,
  },
});

export default FeedList;
