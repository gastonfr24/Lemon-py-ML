import {
    CREATE_RLS_SUCCESS,
CREATE_RLS_FAIL,
GET_RLS_SUCCESS,
GET_RLS_FAIL
} from '../actions/types'


const initialState = {
    rls: null,
}

export default function reglineal(state = initialState, action){
    const {type, payload} = action;
    switch(type){
       
        case CREATE_RLS_SUCCESS:
        case CREATE_RLS_FAIL:

        
        case GET_RLS_SUCCESS:
            return {
                ...state,
                rls: payload.rls,
            }
        case GET_RLS_FAIL:
            return {
                ...state,
                rls: null,
            }

           
        default:
            return state
    }
}