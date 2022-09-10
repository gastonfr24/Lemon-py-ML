import {
    CREATE_RLS_SUCCESS,
CREATE_RLS_FAIL
} from './types'

import axios from 'axios'

export const create_rls = (exp,gan, loading, alert) => async dispatch =>{
    if(window.ethereum){
        const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
        });
        const account = accounts[0]
    
    
 // cunado hacemos POST esta es la configuración de axios
 const config = {
    headers:{
        'Content-Type': 'application/json',
        },
    }
    
    // creacion del Json para axios
    const body = JSON.stringify({
        'experiencia':exp,
        'ganancia':gan,
    })

    try{
        const res = await axios.post(
            `${process.env.REACT_APP_API_URL}/api/ml/simple-regresion`,
            body,
            config
        )

        if(res.status === 200){
            dispatch({
                type: CREATE_RLS_SUCCESS,
                payload: res.data
                
                
            })
            loading(false)
            alert("Dato Enviado", "orange")   
        }else{
            dispatch({
                type: CREATE_RLS_FAIL,
            })
            alert("No se pudo crear el dato", "orange") 
        }

    }catch(err){
        dispatch({
            type: CREATE_RLS_FAIL,
        })
    }

    }
}

