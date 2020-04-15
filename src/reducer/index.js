import productReducer from './productReducer';
import userReducer from './userReducer';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    productRed : productReducer,
    userRed : userReducer
})

export default allReducers;