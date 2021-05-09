import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import LoginScreen from './Login';
import RegisterScreen from './Register';

const HomeStack = createStackNavigator(
    {
        Login: LoginScreen,
        Register: RegisterScreen,
    },
    {
        initialRouteName: 'Login',
    }
);
export default HomeStack;
