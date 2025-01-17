import React, { useState } from "react";

const ToDo = () => {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  const handleChange = (e) => {
    setTask(e.target.value);
  };
  function handleBtnClick(task) {
    setList([...list, task]);
    setTask("");
  }
  return (
    <div>
      <label>Taks to added</label>
      <input type="text" value={task} onChange={handleChange} />
      <button onClick={() => handleBtnClick(task)}>Add</button>
      <h1>List of Tasks</h1>
      {list?.length > 0 &&
        list?.map((ele, index) => (
        <ul key={index}> 
        <li>{ele}</li>
        </ul>
        ))}
    </div>
  );
};
export default ToDo;
