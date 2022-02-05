import React from 'react';
import CollegeList from '../components/CollegeList';
import {CustomHeader} from '../components/header';

function CollegeListScreen() {
  return (
    <>
      <CustomHeader title="Colleges" />
      <CollegeList />
    </>
  );
}

export default CollegeListScreen;
