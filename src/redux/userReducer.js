import { LOGIN_USER } from "./actionType";

const initialState = {
    user:{}
};

export const userReducer = (state=initialState,action) => {
    switch(action.type){
        case LOGIN_USER:
            return {
                ...state, user: action.payload
            }
        default:
            return state;    
    }
}