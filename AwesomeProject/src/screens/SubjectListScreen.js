import React from 'react';
import {CustomHeader} from '../components/header';
import SubjectList from '../components/SubjectList';

function SubjectListScreen() {
  return (
    <>
      <CustomHeader title="Subject" />
      <SubjectList />
    </>
  );
}

export default SubjectListScreen;
