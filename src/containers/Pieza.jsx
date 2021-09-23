import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/Pieza.scss';

const Maquina = () => {
    const [sensors, setSensors] = useState([]);
    useEffect(() => {
        fetch('https://localhost:44345/api/Piezas', {
            method: "GET"
        })
        .then(response => response.json())
        .then(data => setSensors(data))
    }, []);
    console.log(sensors)

    return (
        <div className="Piezas__container">
            <h2>Listar las piezas</h2>
            <div className="Piezas" >
                {sensors.map((item) => (
                    <Link className="link" to={`/medicion/${item.piezaId}`} key={item.piezaId} >
                        <div className="List" >
                            <div className="List__container">
                                <img className="List__image" src="../styles/images/080.png" />
                            </div>
                            <div className="List__text">
                                <h2 className="List__title">{item.piezaNombre}</h2>
                                <p>Medida: {item.piezaMedida}</p>
                                <p>{item.piezaDescripcion}</p>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Maquina;