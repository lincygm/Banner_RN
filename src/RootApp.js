/**
 * Created by goumou on 2017/3/27.
 */
import React,{ Component } from 'react';
import { Provider } from 'react-redux';
import store from './configureStore';
import Roots from './Root';
import  {
    AppRegistry,
    StyleSheet,
    Text,
    Image,
    View
    } from 'react-native';
export default class RootApp extends Component{
    render(){
        return(
            <Provider store={store}>
                <Roots/>
            </Provider>
        );
    }
}



//AppRegistry.registerComponent('rootApp', () => RootApp);
