/**
 * Created by goumou on 2017/3/27.
 */

import * as type from './ActionTypes';
const initialState={
    updated:false,
    text:'gm'
}
let newReducers=(state=initialState,action)=>{
    switch (action.type){
        case type.UPDATE:
            return{  ...state,
                    updated: true,
                    text:'xiaoming'
                } ;
        case type.URL_FETCH:
            return {
                ...state
            }
        case type.URL_FETCH_FAIL:
            return {
                ...state
            }
        default:
            return state;
    }
}
export default newReducers;
