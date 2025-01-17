import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, loginUser } from "../redux/actionCreator";
import Button from "../customComp/Button";

const Counter = () =>{
    //step 5: use redux state
    //with the help of useselector we can access the value of our state
    const count = useSelector((state)=>state.counter.count);

    const user = useSelector((state)=>state.user.user.data);
    
    //step 6: dispatch actions
    //we can dispatch actions with the help of useDispatch
    const dispatch = useDispatch();
    return(
        <div>
            <h1>User : {user?.name}</h1>
            <Button title="Login" handleClick={()=>dispatch(loginUser())}/>
            <h1>Count: {count}</h1>
            <Button title="Increment" handleClick={()=>dispatch(increment())}/>
            <Button title="Decrement" handleClick={()=>dispatch(decrement())}/>
        </div>
    )
}
export default Counter;