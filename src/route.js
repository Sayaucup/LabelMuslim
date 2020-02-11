import React from 'react';
import {createAppContainer} from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'

import Login from './screen/login'
import Register from './screen/register'
import Home from './screen/home'

const Route = createStackNavigator ({
    Login : {screen : Login, navigationOptions :{headerShown:false}},
    Register : {screen : Register, navigationOptions :{headerShown:false}},
    Home : {screen : Home, navigationOptions :{headerShown:false}},


})

export default createAppContainer(Route)