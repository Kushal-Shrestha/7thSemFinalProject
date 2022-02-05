import React from 'react';
import FeedList from '../components/FeedList';
import {CustomHeader} from '../components/header';

function PersonalizedFeedScreen() {
  return (
    <>
      <CustomHeader title="Personalized Feed" />
      <FeedList />
    </>
  );
}

export default PersonalizedFeedScreen;
