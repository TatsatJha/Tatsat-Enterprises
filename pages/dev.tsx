import React from 'react';
import Header from '../Components/Header';
import { MainDev } from '../Components/Main';

function dev() {
  return <div>
    <Header page="dev"></Header>
    <MainDev></MainDev>
  </div>;
}

export default dev;
