import React, {useEffect, useState } from "react";

const useApi = () =>{
    const [data, setData] = useState([]);

    useEffect(()=>{
        fetchData();
      },[]);
    
      async function fetchData() {
        const url =
          "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json";
        try {
          const response = await fetch(url);
          const result = await response.json();
          setData(result);
        } catch (err) {
          console.log("Error in fetching data ", err);
        }
      }
    return {data};
}
export default useApi;