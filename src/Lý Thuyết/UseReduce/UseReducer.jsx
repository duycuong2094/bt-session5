import React, { useReducer } from 'react'

function UseReducer() {
    const reduce=(state,action)=>{
        if(action=="abc"){
            return state+1
        }
    }
    const[abc,dispath]=useReducer(reduce,0);
const handleCount=()=>{
    dispath("abc")
}
  return (
    <div>
        {/* UseRecuder: Quản lý những state phức tạp */}
        <p>{abc}</p>
        <button onClick={handleCount}>Up</button>
    </div>
  )
}

export default UseReducer