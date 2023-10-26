import React, { useState } from 'react';

const Zar = () => {
    const [zar1, setZar1] = useState(1);
    const [zar2, setZar2] = useState(1);
    const [toplam, setToplam] = useState(2);

    const zarAt = () => {
        const yeniZar1 = Math.floor(Math.random() * 6) + 1;
        const yeniZar2 = Math.floor(Math.random() * 6) + 1;
        const toplamZar = yeniZar1 + yeniZar2;
        setZar1(yeniZar1);
        setZar2(yeniZar2);
        setToplam(toplamZar);
    };

    return (
        <>
            <div className="zar-container">
                <div className="zar">{zar1}</div>
                <div className="zar">{zar2}</div>
                <button onClick={zarAt}>Zar At</button>
            </div>
            <div>Toplam: {toplam}</div>

        </>


    );
};

export default Zar;
