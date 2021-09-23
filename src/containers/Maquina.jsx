import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/Sensor.scss';

const Maquina = () => {
    const [sensors, setSensors] = useState([]);
    useEffect(() => {
        fetch('https://localhost:44345/api/Piezas', {
            method: "GET"
        })
        .then(response => response.json())
        .then(data => setSensors(data))
    }, []);

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

    // let temp = [];
    // sensors.forEach((item) => (
    //     temp.push(item.medicion)
    // ))
    console.log(sensors);

    return (
      <div className="Sensor__container">

        <h2>Listar los maquinas</h2>
        <table className="Sensor__card">
            <tr>
                <th>Máquina</th>
                <th>Descripción</th>
                <th> </th>
            </tr>
            {sensors.map((item) => (
                <tr key={item.maquinaId}>
                    <td>
                        <Link to={"/pieza/" + item.maquinaId} >
                            {item.maquinaNombre}
                        </Link>
                    </td>
                    <td>{item.maquinaDescripcion}</td>
                    <td>
                        <div className="Sensor__button">
                            <Link className="edit" to={"/sensor/edit/" + item._id}>
                                <i className="fas fa-pen"></i>
                            </Link>
                        </div>
                        <button
                            className="Sensor__button--delete"
                            id={item._id}
                            onClick={deleteSensor}
                        >
                            <i className="far fa-trash-alt"></i>
                        </button>
                    </td>
                </tr>
            ))}
        </table>
      </div>
    );
};

export default Maquina;