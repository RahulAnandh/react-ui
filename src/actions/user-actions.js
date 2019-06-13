import {ADD_USER, GET_USER, DELETE_USER, UPDATE_USER,CHECK_USER} from './action-types';
export const addUser = (user) => {
    return {
        type:ADD_USER,
        user:user
    }
}
export const getUser = () => {
    return {
        type:GET_USER,
    }
}
export const updateUser= (id,item) => {
    return {
        type:UPDATE_USER,
        id,
        item
    }
}
export const deleteUser = (id) => {
    return {
        type:DELETE_USER,
        id
    }
}
export const checkUser = (user_data) => {
    return {
        type:CHECK_USER,user_data
    }
}