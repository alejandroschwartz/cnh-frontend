import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { Bar } from 'react-chartjs-2';

import '../styles/components/Sensor.scss';

const Sensor = () => {
    const [sensors, setSensors] = useState([]);
    useEffect(() => {
        fetch('http://localhost:3000/api/sensors', {
            method: "GET"
        })
        .then(response => response.json())
        .then(data => setSensors(data))
    }, []);
    const deleteSensor = (e) => {
        e.preventDefault()
        const id = e.target.id;
        fetch('http://localhost:3000/api/sensors/' + id, {
            method: "DELETE"
        })
        .then(response => response.json())
        .then(data => console.log(data));
        window.location.href = '/sensor';
    }

    let temp = [];
    sensors.forEach((item) => (
        temp.push(item.temperature)
    ))
    console.log(temp);
    const data = {
        labels: ["Último", "Anterior", "3er", "4to", "5to", "6to", "7to"],
        datasets: [
            {
                label: "Temperaturas medidas ( °C )",
                backgroundColor: "rgba(54, 162, 235, 0.2)",
                borderColor: "rgba(54, 162, 235, 1)",
                borderWidth: 2,
                data: temp,
            },
        ],
    };
    const options = {
        scales: {
            yAxes: [
                {
                    ticks: { beginAtZero: true },
                },
            ],
        },
    };

    return (
        <div className="Sensor__container" >
            <h2>Gráfico de ultimos registros</h2>
            <div className="Sensor__grafica" >
                <Bar data={data} options={options} />
            </div>

            <h2>Listar los sensores</h2>
            <div>
                {sensors.map((item) => (
                    <div className="Sensor__card" key={item._id} >
                        <div>
                            <p>Marca: <strong>{item.brand}</strong>, Modelo: <strong>{item.model}</strong></p>
                            <p>Realizado por: <strong>{item.author}</strong>, el día <strong>{moment(item.created_at).calendar()}</strong></p>
                            <p>Temp: <strong>{item.temperature} (°c) </strong>, Descripción: <strong>{item.description}</strong></p>
                        </div>
                        <div>
                            <button className="Sensor__button--delete" id={item._id} onClick={deleteSensor} >
                                Borrar
                            </button>
                            <div className="Sensor__button" >
                                <Link className="edit" to={'/sensor/edit/' + item._id} >
                                    Editar
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Sensor;