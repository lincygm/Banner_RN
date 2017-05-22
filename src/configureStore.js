/**
 * Created by goumou on 2017/3/27.
 */
import { createStore, applyMiddleware,compose }from 'redux';
import rootReducer from './RootReducers';
import thunk from 'redux-thunk';


const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
let store = createStoreWithMiddleware(rootReducer);
export default store;

