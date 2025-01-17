import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/actionCreator";

const Counter = () =>{
    //step 5: use redux state
    //with the help of useselector we can access the value of our state
    const count = useSelector((state)=>state.count);
    
    //step 6: dispatch actions
    //we can dispatch actions with the help of useDispatch
    const dispatch = useDispatch();
    return(
        <div>
            <h1>Count: {count}</h1>
            <button onClick={()=>dispatch(increment())}>Increment</button>
            <button onClick={()=>dispatch(decrement())}>Decrement</button>
        </div>
    )
}
export default Counter;