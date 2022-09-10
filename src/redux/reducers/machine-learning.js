import {
    CREATE_RLS_SUCCESS,
CREATE_RLS_FAIL
} from '../actions/types'


const initialState = {
    rls: null,
}

export default function user(state = initialState, action){
    const {type, payload} = action;
    switch(type){
       
       // casos en la creación del usuario
        case CREATE_RLS_SUCCESS:
        case CREATE_RLS_FAIL:
       
       
        // casos en el detalle del usuario
        case CREATE_RLS_SUCCESS:
            return{
                ...state,
                rls: payload.rls
            }
        case CREATE_RLS_FAIL:
            return {
                ...state,
                rls: null,
            }
        default:
            return state;
    }
}