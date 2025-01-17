import birdImg from "../assets/bird.jpg";
const ListComp = ({ data }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "5px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {data?.map((ele, idx) => (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            border: "1px solid black",
            alignItems: "center",
            justifyContent:"center",
            padding: "10px",
            width: "100px",
            height: "100px",
          }}
        >
          <img src={birdImg} alt="lists" height="40" width="40" />
          <h5 key={idx}>{ele}</h5>
        </div>
      ))}
    </div>
  );
};
export default ListComp;
