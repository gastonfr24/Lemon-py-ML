import {combineReducers} from 'redux'

import alert from './alert'
import web3 from './web3'
import user from './user'
import blog from './blog'
import categories from './categories'
import reglineal from './machine-learning'

export default combineReducers({
    alert,// esta funcion retorna un estado y una alerta
    web3,
    user,
    blog,
    categories,
    reglineal
}) 


