import {
    CREATE_RLS_SUCCESS,
CREATE_RLS_FAIL,
GET_RLS_SUCCESS,
GET_RLS_FAIL,
GET_PROJECTS_SUCCESS,
GET_PROJECTS_FAIL,
CREATE_PREDICT_SUCCESS,
CREATE_PREDICT_FAIL
} from '../actions/types'


const initialState = {
    rls: null,
    projects: null,
}

export default function reglineal(state = initialState, action){
    const {type, payload} = action;
    switch(type){
       
        case CREATE_RLS_SUCCESS:
        case CREATE_RLS_FAIL:

        case CREATE_PREDICT_SUCCESS:
        case  CREATE_PREDICT_FAIL:
        
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

        // Projects
        
        case GET_PROJECTS_SUCCESS:
            return {
                ...state,
                projects: payload.projects,
            }
        case GET_PROJECTS_FAIL:
            return {
                ...state,
                projects: null,
            }



        default:
            return state
    }
}