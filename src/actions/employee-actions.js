import {ADD_EMPLOYEE, GET_EMPLOYEE, DELETE_EMPLOYEE, UPDATE_EMPLOYEE} from './action-types';
export const addEmployee = (employee) => {
    return {
        type:ADD_EMPLOYEE,
        employee:employee
    }
}
export const getEmployee = () => {
    return {
        type:GET_EMPLOYEE,
    }
}
export const updateEmployee= (id,item) => {
    return {
        type:UPDATE_EMPLOYEE,
        id,
        item
    }
}
export const deleteEmployee = (id) => {
    return {
        type:DELETE_EMPLOYEE,
        id
    }
}