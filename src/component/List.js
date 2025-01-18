import { useState } from "react";
import ListComp from "../customComp/ListComp";

const data = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse'];
const List = () =>{
    const [searchedVal, setSearchedVal] = useState('');
    const [filteredData, setFilteredData] = useState(data);

    //function to set the search term value
    function handleInputChange(e){
        const searchTerm = e.target.value
        setSearchedVal(searchTerm);
        debounceHandleSearch(searchTerm);  //call debounce search on onchange event
    }

    //fucntion to filter out the data
    function handleSearched(searchTerm){
        const filter = data.filter((ele)=> ele.toLowerCase().includes(searchTerm.toLowerCase()));
        setFilteredData(filter);
    }

    //debounce function which takes a fucntion and delay as arguments
    function debounceSearch(fn,delay){
        let timerId;
        return function(...args){
            clearTimeout(timerId);
            timerId = setTimeout(()=>{
                fn(...args);
            },delay);
        };
    }
   
    //calling debounce function with a fucntion and delay
    const debounceHandleSearch = debounceSearch(handleSearched,1000);

    return(
        <div>
            <input type="text" value={searchedVal} onChange={handleInputChange} placeholder="seach here..."/>
           <ListComp data={filteredData}/>
        </div>
    )
}
export default List;