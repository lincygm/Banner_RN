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

export default class Faxian extends Component{


    render(){
        return(<View style={{width,height,alignItems: 'center'} }>
            <Text>
           faxian
                </Text>
            <Image source={{uri:'https://img.alicdn.com/tps/TB1WKTpKpXXXXcuXVXXXXXXXXXX-460-98.png'}}
                   style={{width:100,height:200}}/>
            </View>)
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',   // ˮƽ�Ų�
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: '#d74140',
        alignItems: 'center'  // ʹԪ�ش�ֱ�����Ų�, ��flexDirectionΪcolumnʱ, Ϊˮƽ����
    }

});
