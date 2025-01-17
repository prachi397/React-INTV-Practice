import { useState } from "react";

const GreetForm = () =>{
    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');

    function handleChange(e){
        const {name, value} = e.target;
        if(name === "fName"){
            setFName(value);
        }else if(name === "lName"){
            setLName(value);
        }
    }

    function handleGreet(e){
        e.preventDefault();
        alert(`Hello, ${fName} ${lName}`);
        setFName('');
        setLName('');
    }

    return(
        <form onSubmit={handleGreet}>
            <input type="text" name="fName" placeholder="First Name" value={fName} onChange={handleChange}/>
            <input type="text" name="lName" placeholder="Last Name" value={lName} onChange={handleChange}/>
            <button type="submit">Greet Me</button>
        </form>
    )
}
export default GreetForm;