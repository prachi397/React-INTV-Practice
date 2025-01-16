import { useState } from "react";

const accordionData = [
  {
    id: 1,
    title: "Section 1",
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis sapiente
      laborum cupiditate possimus labore, hic temporibus velit dicta earum
      suscipit commodi eum enim atque at? Et perspiciatis dolore iure
      voluptatem.`,
  },
  {
    id: 2,
    title: "Section 2",
    content: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia veniam
      reprehenderit nam assumenda voluptatem ut. Ipsum eius dicta, officiis
      quaerat iure quos dolorum accusantium ducimus in illum vero commodi
      pariatur? Impedit autem esse nostrum quasi, fugiat a aut error cumque
      quidem maiores doloremque est numquam praesentium eos voluptatem amet!
      Repudiandae, mollitia id reprehenderit a ab odit!`,
  },
  {
    id: 3,
    title: "Section 3",
    content: `Sapiente expedita hic obcaecati, laboriosam similique omnis architecto ducimus magnam accusantium corrupti
      quam sint dolore pariatur perspiciatis, necessitatibus rem vel dignissimos
      dolor ut sequi minus iste? Quas?`,
  },
];

const AccordianComp = () => {
  const [activeIdx, setActiveIdx] = useState(false);

  function handleToggle(id) {
    setActiveIdx(activeIdx === id ? null : id);
  }
  return (
    <>
      {accordionData.map((ele) => (
        <div key={ele.id}>
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <h3>{ele.title}</h3>
            <p onClick={() => handleToggle(ele.id)}>
              {activeIdx === ele.id ? "-" : "+"}
            </p>
          </div>
          {activeIdx === ele.id && <p>{ele.content}</p>}
        </div>
      ))}
    </>
  );
};
export default AccordianComp;
