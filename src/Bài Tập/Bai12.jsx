import React, { useState, useEffect } from 'react';

function Bai12() {
    const [giay, setgiay] = useState(0);
    const [phut, setphut] = useState(0);
    const [gio, setgio] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let intervalId;

        if (isRunning) {
            intervalId = setInterval(() => {
                setgiay((prevGiay) => {
                    if (prevGiay < 59) {
                        return prevGiay + 1;
                    } else {
                        setphut((prevPhut) => {
                            if (prevPhut < 59) {
                                return prevPhut + 1;
                            } else {
                                setgio((prevGio) => prevGio + 1);
                                return 0;
                            }
                        });
                        return 0;
                    }
                });
            }, 100);
        } else {
            clearInterval(intervalId);
        }

        return () => clearInterval(intervalId);
    }, [isRunning]);

    const handleStart = () => {
        setIsRunning(true);
    };

    const handleStop = () => {
        setIsRunning(false);
    };

    return (
        <div>
            <div>{gio}:{phut}:{giay}</div>
            <button onClick={handleStart}>Bắt Đầu</button>
            <button onClick={handleStop}>Dừng</button>
        </div>
    );
}

export default Bai12;
