import { useEffect, useState } from "react";
import { userInformations } from "../services/userInformations";
import UserDetails from "../customComp/UserDetails";
import { Box, CircularProgress } from "@mui/material";

const Information = () => {
  const [userDetails, setUserDetails] = useState([]);
  const [loading, setLoading] = useState(false);
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
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }
  console.log(userDetails);
  return (
    <Box sx={{textAlign:"center"}}>
      {loading ? (
        <CircularProgress/>
      ) : (
        <UserDetails userData={userDetails} fetchData={fetchData}/>
      )}
    </Box>
  );
};
export default Information;
