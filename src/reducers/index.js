import employee from './employee-reducer';
import product from './product-reducer';
import order from './order-reducer';
import user from './login-reducer';
import {combineReducers} from 'redux';
import axios from 'axios';

const rootReducer = combineReducers({
    employee,
    product,
    order,
    user
});

export default rootReducer;