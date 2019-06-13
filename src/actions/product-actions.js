import {ADD_PRODUCT, GET_PRODUCT, DELETE_PRODUCT, UPDATE_PRODUCT} from '../actions/action-types'
export const addProduct = (product) => {
    return {
        type:ADD_PRODUCT,
        product
    }
}
export const getProduct = () => {
    return {
        type:GET_PRODUCT,
    }
}
export const updateProduct = (id,product) => {
    return {
        type:DELETE_PRODUCT,
        id,
        product
    }
}
export const deleteProduct = (id) => {
    return {
        type:UPDATE_PRODUCT,
        id
    }
}