import API from './api';
import { ADD_USER, GET_USER, DELETE_USER, UPDATE_USER, CHECK_USER } from '../actions/action-types';
export default (state = [], payload) => {
    switch (payload.type) {
        case ADD_USER:
            API.post(`user`, payload.user).then(function (response) {
                console.log(response);
            })
                .catch(function (error) {
                    console.log(error);
                });
            return [...state, payload.user]
        case GET_USER:
            API.get(`user`).then(function (response) {
                console.log("get User is is executed...!" + response);
            })
                .catch(function (error) {
                    console.log(error);
                });
            return state = [...state, payload.user]
        case DELETE_USER:
        case UPDATE_USER:
        case CHECK_USER: console.log(payload.user_data);
            API.post(`user/login`,payload.user_data).then(function (response) {
                console.log("check user is executed...!" + response);
            })
                .catch(function (error) {
                    console.log("check user is not executed"+error);
                });
                return state = [...state, {login:true}]
        default: return state
    }
}   