import React, { useEffect, useState } from "react";
import useApi from "./useApi";

let timerId;
const PaginationComp = () => {
  const {data} = useApi();
  const [searchItem, setSearchItem] = useState('');

  const [currentPage, setCurrentPage] = useState(1);

  const itemPerPage = 10;
  const totlePages = Math.ceil(data.length/itemPerPage);

  const currentItems = data.slice((currentPage-1)*itemPerPage,currentPage*itemPerPage);
  const [filteredData, setFilteredData] = useState([]);

  function handlePageChange(newPage){
    if(newPage>0 && newPage<=totlePages){
        setCurrentPage(newPage);
    }
  }
  function handleChange(e){
    setSearchItem(e.target.value);
    clearTimeout(timerId);
    timerId = setTimeout(()=>{
    if(e.target.value === ""){
        setFilteredData(data);
    }else{
        let newItems = currentItems.filter((ele)=>ele.name.toLowerCase().includes(e.target.value));
        console.log(newItems);
        setFilteredData(newItems);
    }
   },3000);
  }
  useEffect(()=>{
    setFilteredData(data);
  },[data]);

  return(
    <div>
        <h1>Employee table</h1>
        <input type="text" placeholder="search employee" value={searchItem} onChange={handleChange}/>
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>email</th>
                    <th>role</th>
                </tr>
            </thead>
            <tbody>
                {filteredData?.length>0 && filteredData?.map((ele)=>(
                    <tr key={ele.id}>
                        <td>{ele.id}</td>
                        <td>{ele.name}</td>
                        <td>{ele.email}</td>
                        <td>{ele.role}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        <div>
            <button onClick={()=>handlePageChange(currentPage-1)}>previous</button>
            <span>{currentPage}</span>
            <button onClick={()=>handlePageChange(currentPage+1)}>Next</button>
        </div>
    </div>
  )
};
export default PaginationComp;
