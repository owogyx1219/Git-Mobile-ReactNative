import React, { Component } from 'react';
import { Tester, TestHookStore } from 'cavy';
import Repositories from './Repositories';
import TestSpec1 from './TestSpec1';

const testHookStore = new TestHookStore();
 
export default class AppWrapper extends Component {
  render() {
    return (
      <Tester specs={[TestSpec1, TestSpec2, TestSpec3, TestSpec4, TestSpec5, TestSpec6]} store={testHookStore} waitTime={4000}>
        <Repositories />
      </Tester>
    );
  }
}