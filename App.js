import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import AppLoginRegister from './components/AppLoginRegister';

export default class FirebaseRN extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AppLoginRegister/>
    );
  }
}

AppRegistry.registerComponent('FirebaseRN', () => FirebaseRN);