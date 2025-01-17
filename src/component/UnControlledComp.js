import { createRef, useState } from "react";

const UnControlledComp = () =>{
    const [name, setName] = useState('');
    const nameRef = createRef();

    function handleSubmit(e){
        e.preventDefault();
      //  nameRef.current.focus();
        alert(`name entered is: ${name}`);
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" placeholder="EnterName" value={name} onChange={(e)=>setName(e.target.value)}/>
            <button type="submit">Submit</button>
        </form>
    )
}
export default UnControlledComp;