import React, { useRef, useState } from "react";
import TableOfProps from "./tableOfProps";
import "./inputBox.css";

function InputBox(props) {
  const inputRef = useRef(null);
  const [updateList, setUpdateList] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const inputValue = inputRef.current.value;
    setUpdateList(inputValue);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <p>{updateList} + log</p>
        <input
          className="inputBox"
          ref={inputRef}
        />
        <button type="submit">Submit</button>
      </form>
      <div className="OuterTables">
        <TableOfProps
          titleOfHeader={"Pros"}
          UserInputfromTheTop={updateList}
        ></TableOfProps>
        <TableOfProps
          titleOfHeader={"Cons"}
          UserInputfromTheTop={updateList}
        ></TableOfProps>
      </div>
    </div>
  );
}

export default InputBox;
