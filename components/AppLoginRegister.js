import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import TabNavigator from './Router';

const AppContainer = createAppContainer(TabNavigator);
export default class AppLoginRegister extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <AppContainer/>;
    }
}
