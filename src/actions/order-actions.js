import {ADD_ORDER, GET_ORDER, DELETE_ORDER, UPDATE_ORDER} from "./action-types"
export const addOrder = (item) => {
    return {
        type:ADD_ORDER,
        item
    }
}
export const getOrder = () => {
    return {
        type:GET_ORDER,
    }
}
export const updateOrder = (id,item) => {
    return {
        type:UPDATE_ORDER,
        id,
        item
    }
}
export const deleteOrder = (id) => {
    return {
        type:DELETE_ORDER,
        id
    }
}
