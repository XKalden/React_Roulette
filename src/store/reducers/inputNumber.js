import * as actionType from '../actions/actionTypes';


const initailState = {
    inputNumber : null,
    roleNumber : null

}



const reducer = (state=initailState, action) => {

    switch(action.type){
        case(actionType.CHANGE_LUCK_NUMBER):
            return {
                ...state,
                inputNumber: action.payload

            }
        case(actionType.GET_ROLE_NUMBER):
            return{
                ...state,
                roleNumber: action.roleNumber
            }

        default:
            return state;

    }
}


export default reducer