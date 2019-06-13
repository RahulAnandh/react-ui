import API from './api';
import {ADD_EMPLOYEE, GET_EMPLOYEE, DELETE_EMPLOYEE, UPDATE_EMPLOYEE} from '../actions/action-types';
export default (state = [], payload) => {
    switch (payload.type) {
        case ADD_EMPLOYEE:
                    API.post(`employee`, payload.employee).then(function (response) {
                    console.log(response);
                    })
                    .catch(function (error) {
                    console.log(error);
                    });
                    return [...state, payload.employee]
        case GET_EMPLOYEE:
                    API.get(`employee`).then(function (response) {
                    console.log("get empployee is executed...!"+response);
                    })
                    .catch(function (error) {
                    console.log(error);
                    });
                    return state = [...state, payload.employee]
        case DELETE_EMPLOYEE:
        case UPDATE_EMPLOYEE:
        default: return state
    }
}