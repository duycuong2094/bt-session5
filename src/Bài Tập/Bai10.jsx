import React from "react";
import { useState } from "react";

function Bai10() {
  const [text, setText] = useState("");
  const [count,setCount]=useState(0)
  const handChangInp = (e) => {
    setText(e.target.value);
  };
const handClick=()=>{
    setCount(text.trim().length)
}
  return (
    <div>
      <input type="text" name="" value={text} id="" onChange={handChangInp} />
      <div> Số kí tự của đoạn văn bản là {count}</div>
      <button onClick={handClick}>Click</button>
    </div>
  );
}

export default Bai10;
