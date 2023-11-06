import React, { useState } from 'react';

function TodoList() {
    const [arrTodo, setArrTodo] = useState([]);
    const [text, setText] = useState('');
    const [updateStatus, setUpdateStatus] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(-1); // Lưu index của công việc đang sửa

    const changeInp = (e) => {
        setText(e.target.value);
    }

    const handleClick = () => {
        if (updateStatus) {
            const updatedTodos = [...arrTodo];
            updatedTodos[currentIndex] = { text, check: false };
            setArrTodo(updatedTodos);
            setUpdateStatus(false);
            setCurrentIndex(-1);
        } else {
            setArrTodo([...arrTodo, { text, check: false }]);
        }
        setText('');
    }

    const changeCheck = (index) => {
        let updatedTodos = [...arrTodo];
        updatedTodos[index].check = !updatedTodos[index].check;
        setArrTodo(updatedTodos);
    }

    const dele = (index) => {
        let deleUpdate = [...arrTodo];
        deleUpdate = deleUpdate.filter((item, i) => i !== index);
        setArrTodo(deleUpdate);
    }

    const updateTodo = (index) => {
        setUpdateStatus(true);
        setCurrentIndex(index);
        setText(arrTodo[index].text); 
    }

    return (
        <div>
            <h1>Danh sách công việc</h1>
            <ul>
                {arrTodo.map((item, index) => (
                    <li  key={index}>
                        <span style={{ textDecoration: item.check ? 'line-through' : 'none' }}>{item.text}</span>
                        <input
                            type="checkbox"
                            checked={item.check}
                            onChange={() => changeCheck(index)}
                        />
                        <span onClick={() => dele(index)}>Xóa</span>
                        <span onClick={() => updateTodo(index)}>Sửa</span>
                    </li>
                ))}
            </ul>
            <input type="text" value={text} onChange={changeInp} />
            <button onClick ={handleClick}><div>{updateStatus?"Sửa" :"Thêm"}</div></button>
        </div>
    );
}

export default TodoList;
