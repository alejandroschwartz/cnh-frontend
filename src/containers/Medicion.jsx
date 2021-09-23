import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Line } from 'react-chartjs-2';

import '../styles/components/Medicion.scss';

const Medicion = (props) => {
    const [sensors, setSensors] = useState([]);
    const piezaId = props.match.params.id;
    useEffect(() => {
        fetch('https://localhost:44345/api/Piezas/' + piezaId, { method: "GET" })
        .then(response => response.json())
        .then(data => setSensors(data.mediciones))
    }, []);
    const deleteMedicion = (e) => {
        e.preventDefault()
        const medicionId = e.target.id;
        console.log(medicionId)
        fetch('https://localhost:44345/api/Mediciones/' + medicionId, { method: "DELETE" })
        .then(response => response.json())
        .then(data => console.log(data));
        window.location.href = '/medicion/' + piezaId;
    }

    let temp = [];
    sensors.forEach((item) => (
        temp.push(item.medicion)
    ))
    const data = {
        labels: ["1ro", "2do", "3er", "4to", "5to", "6to", "7to", "8vo"],
        datasets: [
            {
                label: "Medidas ( mm. )",
                backgroundColor: "rgba(54, 162, 235, 0.2)",
                borderColor: "rgba(54, 162, 235, 1)",
                borderWidth: 2,
                data: temp,
            },
        ],
    };
    console.log(temp);
    console.log(sensors)

    return (
      <div className="Sensor__container">
        <h2>Gráfico de ultimas mediciones</h2>
        <div className="Sensor__grafica">
            <Line data={data} />
        </div>
        <h2>Listar mediciones</h2>
        <p className="CrearMedicion_button" >
            <Link className="link" to="/medicion/create" >NUEVA MEDICIÓN</Link>
        </p>
        <table className="Sensor__card">
            <thead>
                <tr>
                    <th>Medición</th>
                    <th>Descripción</th>
                    <th> </th>
                </tr>
            </thead>
            {sensors.map((item) => (
                <tbody key={item.medicionId} >
                    <tr>
                        <td>{item.medicion} mm</td>
                        <td>{item.medicionDescripcion}</td>
                        <td>
                            <div className="Sensor__button">
                                <Link className="edit" to={"/medicion/edit/" + item.medicionId}>
                                    <i className="fas fa-pen"></i>
                                </Link>
                            </div>
                            <button className="Sensor__button--delete" onClick={deleteMedicion} >
                                <i className="far fa-trash-alt" id={item.medicionId}></i>
                            </button>
                        </td>
                    </tr>
                </tbody>
            ))}
        </table>
      </div>
    );
};

export default Medicion;