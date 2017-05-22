/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React,{ Component } from 'react';
import { Provider } from 'react-redux';
import store from './src/configureStore';
import Roots from './src/Root';
import  {
    AppRegistry,
    StyleSheet,
    Text,
    Image,
    View
    } from 'react-native';
import BannerTest from './src/RootApp';



AppRegistry.registerComponent('BannerTest', () => BannerTest);
