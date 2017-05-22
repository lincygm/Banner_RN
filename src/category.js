/**
 * Created by goumou on 2017/3/18.
 */
'use strict';
import React,{Component} from 'react';
import {
    View,
    Text,
    Image,
    TouchableWithoutFeedback,
    PropTypes,
    StyleSheet,
    Dimensions
    } from 'react-native';

const {width, height} = Dimensions.get('window');

export default class category extends Component{


    render(){
        return(<View style={{width,height,alignItems: 'center'} }>
            <Text>
           nidaye
                </Text>
            </View>)
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',   // 水平排布
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: '#d74140',
        alignItems: 'center'  // 使元素垂直居中排布, 当flexDirection为column时, 为水平居中
    }

});