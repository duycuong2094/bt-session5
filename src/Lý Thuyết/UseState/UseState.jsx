import React, { useState } from 'react';

function UseState() {
    // Khai báo useState: 
    const [valueIpn, setValueInp] = useState("");
    const [arr, setArr] = useState([]);

    const changeInp = (e) => {
        setValueInp(e.target.value);
    }
    const handleClick = () => {
        setArr([...arr, valueIpn]);
        setValueInp("")
    }

    return (
        <div>
            <input type="text" name="" id="" value={valueIpn} onChange={changeInp} />
            <button onClick={handleClick}>Add</button>
            {arr.map((item, index) => (
                <div key={index}>{item}</div>
            ))}
        </div>
    )
}

export default UseState;
