import React from "react";
import "./listcontainer.css";
function ListContainer() {
  const [arr, setArr] = React.useState([
    "React",
    "Angular",
    "Vue",
    "Node",
    "Express",
    "MongoDB",
    "MYSQL",
    "HTML",
    "CSS",
    "JAVASCRIPT",
  ]);

  let dragOverItem;
  const dragStart = (e) => {
    console.log(e.target);
    e.target.classList.add("dragging");
    console.log("drag");
  };
  const dragEnd = (e) => {
    e.target.classList.remove("dragging");
    let i1 = e.target.id;
    let i2 = dragOverItem.id;
    if (i1 == i2) return;
    let brr = [];
    for (let i = 0; i < arr.length; i++) {
      if (i1 == i) {
        continue;
      }
      if (i1 < i2) brr.push(arr[i]);
      if (i == i2) {
        brr.push(arr[i1]);
      }
      if (i2 < i1) brr.push(arr[i]);
    }
    setArr(brr);
  };

  const dragOver = (e) => {
    dragOverItem = e.target;
  };
  return (
    <div>
      <div className="container">
        {arr.map((v, i) => {
          return (
            <p
              key={i}
              id={i}
              className="draggable"
              draggable={true}
              onDragStart={dragStart}
              onDragEnd={dragEnd}
              onDragOver={dragOver}
              style={
                i % 2 == 0
                  ? { backgroundColor: "white" }
                  : { backgroundColor: "lightgrey" }
              }
            >
              {v}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default ListContainer;
