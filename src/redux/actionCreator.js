import { userService } from "../services/user";

//step 4: creating actions (dispatch actions)
export const increment = () =>{
    //it returns the action and optionally payload whihc our reducer is using
    return {type: "INCREMENT", payload: 1};
};

export const decrement = () =>{
    return {type:"DECREMENT", payload: 1};
}

//handling async operations using redux-thunk
export function loginUser(){
    //it returns a dfucntion having 2 parameters : dispatch and getState
    return async(dispatch, getState)=>{
        const data = await userService();
        dispatch({type:"LOGIN_USER", payload: data});
    }
};