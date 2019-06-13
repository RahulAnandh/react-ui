import {ADD_PRODUCT, GET_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT} from '../actions/action-types'
import API from './api';
export default (state = [], payload) => {
    switch (payload.type) {
        case ADD_PRODUCT: 
                    API.post(`product`,payload.product).then(function (response) {
                    console.log(response);
                    })
                    .catch(function (error) {
                    console.log(error);
                    });
                    
            return [...state, payload.product]
        case GET_PRODUCT:API.get(`product`).then(function (response) {
                console.log(response);
                })
                .catch(function (error) {
                console.log(error);
                });
            
    return [...state, payload.product]
        case UPDATE_PRODUCT:
        case DELETE_PRODUCT:
        default: return state
    }
}