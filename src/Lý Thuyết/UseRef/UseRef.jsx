import React, { useRef, useState } from 'react'

function UseRef() {
    const [number,setNumber]=useState(0)
    const count={
            count : 0,
    }
    const ref=useRef(0);
    const abc=useRef();


const chaneCount=()=>{
    count.count=count.count+1
    setNumber(number+1)
    ref.current=ref.current+1
    abc.current.focus();
}
console.log("count",count.count);
console.log(ref.current);
  return (
    <div>
        <div>{count.count}</div>
        <input type="text" name="" id="" ref={abc} />
       <button onClick={chaneCount}>Up</button>
    </div>
  )
}

export default UseRef