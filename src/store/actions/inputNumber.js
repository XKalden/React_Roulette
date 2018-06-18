import * as actiontype from './actionTypes';


export const changeLuckyNumber = (number) => {
    return {
        type: actiontype.CHANGE_LUCK_NUMBER,
        payload: number
    }
}


export const roleNumber = (number) => {
    return {
        type: actiontype.GET_ROLE_NUMBER,
        roleNumber: number
    }
}





