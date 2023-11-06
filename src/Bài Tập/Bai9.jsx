import React from 'react'
import { useState } from 'react'

function Bai9() {
    const[count,setCount]=useState(0);
  return (
    <div>
        <div>Số lần click là :{count}</div>
        <button onClick={()=>setCount(count+1)}>Click</button>
    </div>
  )
}

export default Bai9