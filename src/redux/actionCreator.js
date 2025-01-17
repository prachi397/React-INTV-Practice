//step 4: creating actions (dispatch actions)
export const increment = () =>{
    //it returns the action and optionally payload whihc our reducer is using
    return {type: "INCREMENT", payload: 1};
};

export const decrement = () =>{
    return {type:"DECREMENT", payload: 1};
}