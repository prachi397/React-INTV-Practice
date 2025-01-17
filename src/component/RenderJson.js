const data = [
  {
    id: 1,
    setup: "What's the best thing about a Boolean?",
    punchline: "Even if you're wrong, you're only off by a bit",
  },
  {
    id: 2,
    setup: "Why do programmers wear glasses?",
    punchline: "Because they need to C#",
  },
];

const RenderJson = () => {
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {data.map((item) => (
        <div
          id={item.id}
          style={{
            border: "1px solid black",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px",
          }}
        >
          <h3>{item.setup}</h3>
          <p>{item.punchline}</p>
        </div>
      ))}
    </div>
  );
};
export default RenderJson;
