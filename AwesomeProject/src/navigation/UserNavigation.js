import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CollegeListScreen from '../screens/CollegeListScreen';
import SubjectListScreen from '../screens/SubjectListScreen';
import ResearchPaperScreen from '../screens/ResearchPaperScreen';
import LoginScreen from '../screens/LoginScreen';
import PersonalizedQuestionareScreen from '../screens/PersonalizedQuestionareScreen';
import PersonalizedFeedScreen from '../screens/PersonalizedFeedScreen';

const Stack = createStackNavigator();

function UserNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="PersonalizedQuestionare"
        component={PersonalizedQuestionareScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CollegeList"
        component={CollegeListScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SubjectList"
        options={{
          headerShown: false,
        }}
        component={SubjectListScreen}
      />
      <Stack.Screen
        name="PersonalizedFeed"
        options={{
          headerShown: false,
        }}
        component={PersonalizedFeedScreen}
      />
      <Stack.Screen name="ResearchPaper" component={ResearchPaperScreen} />
    </Stack.Navigator>
  );
}

export default UserNavigation;
