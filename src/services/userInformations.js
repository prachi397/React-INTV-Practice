export const userInformations = async() =>{
   try{
    const response = await fetch('https://random-data-api.com/api/users/random_user?size=10');
    const result = await response.json();
    return result;
   }catch(err){
    console.log("Error in fetching data: ",err);
   }
}