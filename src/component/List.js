import ListComp from "../customComp/ListComp";

const data = ['dog', 'cat', 'chicken', 'cow', 'sheep', 'horse'];
const List = () =>{
    return(
        <div>
           <ListComp data={data}/>
        </div>
    )
}
export default List;