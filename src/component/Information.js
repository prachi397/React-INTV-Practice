import { useEffect, useState } from "react";
import { userInformations } from "../services/userInformations";
import UserDetails from "../customComp/UserDetails";
import { Box, CircularProgress, TextField } from "@mui/material";

const Information = () => {
  const [userDetails, setUserDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      setLoading(true);
      // const response = await fetch('https://random-data-api.com/api/users/random_user?size=10');
      // const result = await response.json();
      // setUserDetails(result);
      const data = await userInformations();
      setUserDetails(data);
      setFilteredData(data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }
  //function to filter out the values
  function filterHandler(searchTerm) {
    let filtered = userDetails.filter(
      (ele) =>
        ele.first_name.toLowerCase().includes(searchTerm) ||
        ele.last_name.toLowerCase().includes(searchTerm)
    );
    setFilteredData(filtered);
  }

  //debounce function
  function debounce(fn,delay){
    let timerId;
    return function(...args){
        clearTimeout(timerId);
        timerId = setTimeout(()=>{
            fn(...args);
        },delay);
    }
  }

  const debounceHandler = debounce(filterHandler,3000);

  function handleChange(e) {
    const searched = e.target.value;
    setSearchTerm(searched);
    debounceHandler(searched);
  }

  return (
    <Box sx={{ textAlign: "center" }}>
      {loading ? (
        <CircularProgress />
      ) : (
        <>
          <TextField
            placeholder="Search here..."
            size="small"
            value={searchTerm}
            onChange={handleChange}
          />
          <UserDetails userData={filteredData} fetchData={fetchData} />
        </>
      )}
    </Box>
  );
};
export default Information;
