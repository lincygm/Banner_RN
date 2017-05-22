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
    Dimensions,
    ToastAndroid,
    TouchableHighlight
    } from 'react-native';
import { connect ,Provider} from 'react-redux';
const {width, height} = Dimensions.get('window');
import  {hh} from './Actions';
import stores from './configureStore';
import {bindActionCreators} from 'redux';
import RNFetchBlob from 'react-native-fetch-blob'

 class Home extends Component{
    constructor(props){
        super(props);
        this.buttonOnclick =this.buttonOnclick.bind(this);
        let unsubscribe = stores.subscribe(() =>
                console.log(stores.getState())
        )
        this.state={updated:false,text:'gm'};
    }
     fet() {
         fetch('https://img.alicdn.com/tps/TB1WKTpKpXXXXcuXVXXXXXXXXXX-460-98.png', {
             method: 'GET'
         }).then(function(response) {
             //????,????
             console.log('1gm fail')
         }).catch(function(err) {
             //????
             console.log('2gm fail')
         });
     }
     fetch_url(){
         RNFetchBlob.fetch('GET', 'https://img.alicdn.com/tps/TB1WKTpKpXXXXcuXVXXXXXXXXXX-460-98.png', {
             Authorization : 'Bearer access-token...',
         })
             // when response status code is 200
             .then((res) => {
                 // the conversion is done in native code
                 let base64Str = res.base64()
                 // the following conversions are done in js, it's SYNC
                 let text = res.text()
                 let json = res.json()
                 console.log('hhh')
             })
             // Status code is not 200
             .catch((errorMessage, statusCode) => {
                 // error handling
                 console.log('gm fail')
             })
     }
    buttonOnclick(){
        this.fet();
        this.fetch_url();
        stores.dispatch(hh({ type:'UPDATE'}));
        let action = stores.getState();
        console.log(action.newReducers.updated);
        this.text = action.newReducers.text;
        this.setState({updated:action.newReducers.updated,text:action.newReducers.text});
    }


    render(){
        return(<View style={{width,height,alignItems: 'center'} }>
            <TouchableHighlight onPress ={this.buttonOnclick.bind(this)}>
                <Text>
                     dianwo{this.state.text}
                 </Text>
            </TouchableHighlight>
            <Image source={{uri:'https://img.alicdn.com/tps/TB1WKTpKpXXXXcuXVXXXXXXXXXX-460-98.png'}}
                style={{width:100,height:200}}/>
            </View>);
    }

}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',   // Ë®Æ½ÅÅ²¼
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: '#d74140',
        alignItems: 'center'  //
    }
});
const mapStateToProps = (state) => {
    return  {
        updated:state.updated,
        text:state.text
    }
}

const mapDispatchToProps = (dispatch,type) => {
    return {
        hh: ()=>{dispatch(hh({ type:UPDATE,updated: true, text: 'dsad'}))},
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);
