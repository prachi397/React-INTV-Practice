const UserDetails = ({userData}) =>{
    return(
        <dov>
            {userData?.map((ele)=>(
                <div key={ele.id}>
                    <img src={ele.avatar} alt={ele.first_name}/>
                    <h3>{ele.first_name} {ele.last_name}</h3>
                    <p>{ele.employment.title}</p>
                </div>
            ))}
        </dov>
    )
}
export default UserDetails;