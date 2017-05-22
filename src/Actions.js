/**
 * Created by goumou on 2017/3/27.
 */
import * as type from './ActionTypes';
import Util from './Common';
export let hh =(action)=>{
    return dispatch=>{
        dispatch(_update(action));
    };
};

export let fetch_url=(url)=>{
    return dispatch=>{
        Util.get(url.url,(response)=>{
            dispatch();
        },(error)=>{
            dispatch();
        })
    };
}

let fetch_success=(response)=>{
    return {
        type:type.URL_FETCH,
    }
}

let fetch_fail=()=>{
    return {
        type:type.URL_FETCH_FAIL
    }
}

 let  _update=(action)=>{
    return {
        type:type.UPDATE,
    };
}
