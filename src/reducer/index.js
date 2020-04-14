import productReducer from './productReducer';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    productRed : productReducer
})

export default allReducers;