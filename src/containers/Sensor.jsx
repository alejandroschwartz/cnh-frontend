import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { Line } from 'react-chartjs-2';

import '../styles/components/Sensor.scss';
import '../styles/components/Home.scss';

const Sensor = () => {
    const [sensors, setSensors] = useState([]);
    useEffect(() => {
        fetch('https://localhost:44345/api/Piezas', {
            method: "GET"
        })
        .then(response => response.json())
        .then(data => setSensors(data))
    }, []);
    console.log(sensors)
    const deleteSensor = (e) => {
        e.preventDefault()
        const id = e.target.id;
        fetch('http://localhost:5001/api/sensors/' + id, {
            method: "DELETE"
        })
        .then(response => response.json())
        .then(data => console.log(data));
        window.location.href = '/sensor';
    }

    return (
      <div className="Sensor__container">
        <h2>Listar las piezas</h2>

        <div className="Home__container" >
            {sensors.map((item) => (
                <Link to={"/pieza/" + item.piezaId} key={item.piezaId} >
                    <div className="Item" >
                        <div className="Item__container">
                            <img className="Item__image" src="../styles/images/080.png" />
                        </div>
                        <div className="Item__text">
                            <h2 className="Item__title">{item.piezaNombre}</h2>
                            <p className="Item__title">
                                <small>
                                Medida: {item.piezaMedida}, {item.piezaDescripcion}
                                </small>
                            </p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
      </div>
    );
};

export default Sensor;