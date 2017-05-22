/**
 * Created by goumou on 2017/3/18.
 */
'use strict';
import reducers from '../Redux/reducers';
import {Provider} from 'react-native';
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
const middlewares =[thunk];
const createStoreWidthMiddleware = applyMiddleware(...middlewares)(createStore);
export default class Main extends Component{
    constructor(props){
        super(props);
        this.state={
            store:createStoreWidthMiddleware(reducers)
        };
    }
    render(){
        return(<Provider store = {this.state.store}
            <Main2/>
        </Provider>);
    }
}