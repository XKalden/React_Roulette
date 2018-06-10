import * as actionType from '../actions/actionTypes';


const initailState = {
    inputNumber : null,

}



const reducer = (state=initailState, action) => {

    switch(action.type){
        case(actionType.CHANGE_LUCK_NUMBER):
            return {
                ...state,
                inputNumber: action.payload

            }
        default:
            return state;

    }
}


export default reducer