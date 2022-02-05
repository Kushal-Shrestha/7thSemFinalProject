import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import UserNavigation from './UserNavigation';

function MainNavigation() {
  return (
    <NavigationContainer>
      <UserNavigation />
    </NavigationContainer>
  );
}

export default MainNavigation;
