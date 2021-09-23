import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Line } from 'react-chartjs-2';

import '../styles/components/Sensor.scss';

const Pieza = (props) => {
    const [sensors, setSensors] = useState([]);
    const piezaId = props.match.params.id;
    console.log(piezaId)
    useEffect(() => {
        fetch('https://localhost:44345/api/Piezas/' + piezaId, {
            method: "GET"
        })
        .then(response => response.json())
        .then(data => setSensors(data.mediciones))
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

    let temp = [];
    sensors.forEach((item) => (
        temp.push(item.medicion)
    ))
    console.log(temp);
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
    const options = {
        scales: {
            y: {
                min: 139,
                max: 141
            }
        },
    };
    console.log(sensors)

    return (
      <div className="Sensor__container">
        <h2>Gráfico de ultimos registros</h2>
        <div className="Sensor__grafica">
            <Line data={data} options={options} />
        </div>

        <h2>Listar los maquinas</h2>
        <table className="Sensor__card">
            <tr>
                <th>Medición</th>
                <th>Descripción</th>
                <th> </th>
            </tr>
            {sensors.map((item) => (
                <tr key={item.medicionId}>
                    <td>{item.medicion} mm</td>
                    <td>{item.medicionDescripcion}</td>
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

export default Pieza;