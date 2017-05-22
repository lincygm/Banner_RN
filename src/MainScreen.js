'use strict';
import React,{Component} from 'react';

import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    Alert,
    RefreshControl
    } from 'react-native';

import MenuButton from './MenuButton';
import ViewPager from 'react-native-viewpager';
import HOME from './Home';
import CATEGORY from './category';
import CART from './cart';
import PERSONAL from './personal';
import FAXIAN from './faxian';
const BANNER_IMGS = [
    require('./../images/banner/1.jpg'),
    require('./../images/banner/2.jpg'),
    require('./../images/banner/3.jpg'),
    require('./../images/banner/4.jpg')
];

export default class MainScreen extends Component {

    constructor(props) {
        super(props);
        // 用于构建DataSource对象
        var dataSource = new ViewPager.DataSource({
            pageHasChanged: (p1, p2) => p1 !== p2,
        });
        // 实际的DataSources存放在state中
        this.state = {
            dataSource: dataSource.cloneWithPages(BANNER_IMGS)
        }
    }

    _renderPage(data, pageID) {
        return (
            <Image source={data} style={styles.page}/>
        );
    }

    _onMenuClick(title, tag) {
        Alert.alert('提示', '你点击了:' + title + " Tag:" + tag);
    }
    _viewShow(text){
        if(text=='home'){
            return (<View><HOME/></View>);
        }else if(text=='category'){
            return(<View><CATEGORY/></View>);
        }else if(text=='faxian'){
            return(<View><FAXIAN/></View>);
        }else if(text=='personal'){
            return (<View><PERSONAL/></View>);
        }else if(text=='cart'){
            return(<View><CART/></View>);
        }
    }

    render() {
        return (
            <View>
                <ViewPager
                    style={{height:130}}
                    dataSource={this.state.dataSource}
                    renderPage={this._renderPage}
                    isLoop={true}
                    autoPlay={true}/>
                <View style={styles.menuView}>
                    <MenuButton renderIcon={require('./../images/home_icons/wdgz.png')}
                                showText={'我的关注'} tag={'wdgz'}
                                onClick={this._onMenuClick}/>
                    <MenuButton renderIcon={require('./../images/home_icons/wlcx.png')}
                                showText={'物流查询'} tag={'wlcx'}
                                onClick={this._onMenuClick}/>
                    <MenuButton renderIcon={require('./../images/home_icons/cz.png')}
                                showText={'充值'} tag={'cz'}
                                onClick={this._onMenuClick}/>
                    <MenuButton renderIcon={require('./../images/home_icons/dyp.png')}
                                showText={'电影票'} tag={'dyp'}
                                onClick={this._onMenuClick}/>
                </View>
                <View style={styles.menuView}>
                    <MenuButton renderIcon={require('./../images/home_icons/yxcz.png')}
                                showText={'游戏充值'} tag={'yxcz'}
                                onClick={this._onMenuClick}/>
                    <MenuButton renderIcon={require('./../images/home_icons/xjk.png')}
                                showText={'小金库'} tag={'xjk'}
                                onClick={this._onMenuClick}/>
                    <MenuButton renderIcon={require('./../images/home_icons/ljd.png')}
                                showText={'领京豆'} tag={'ljd'}
                                onClick={this._onMenuClick}/>
                    <MenuButton renderIcon={require('./../images/home_icons/gd.png')}
                                showText={'更多'} tag={'gd'}
                                onClick={this._onMenuClick}/>
                </View>
                <View style={{marginTop:15,borderWidth:0.5,borderColor:'#ccc'}}>
                     {this._viewShow(this.props.text)}
               </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 104,
        flexDirection: 'row',   // 水平排布
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: '#d74140',
        alignItems: 'center'  // 使元素垂直居中排布, 当flexDirection为column时, 为水平居中
    },
    page: {
        flex: 1,
        height: 130,
        resizeMode: 'stretch'
    },
    menuView: {
        flexDirection: 'row',
        marginTop: 10
    }
});
