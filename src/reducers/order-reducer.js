import {ADD_ORDER, GET_ORDER, DELETE_ORDER, UPDATE_ORDER} from "../actions/action-types"
import API from './api';
const order = {
    ProductName:"Rahul",
    Address:"Chenthuruthil",
    Location:"12.23.4.5.65",
    Date:"01/01/2001",
    Town:"Kanichar",
    PinCode:670674
}
export default (state = [], payload) => {
    switch (payload.type) {
        case ADD_ORDER:
            API.post(`order`, payload.item).then(function (response) {
                console.log(response.data);
            })
                .catch(function (error) {
                    console.log(error);
                });

            return [...state, payload.item]
        case GET_ORDER: API.get(`order`).then(function (response) {
                    console.log(response);
                    })
                    .catch(function (error) {
                    console.log(error);
                    });
             return {...state, order:[order]}
        case UPDATE_ORDER:
        case DELETE_ORDER:
        default: return state
    }
}