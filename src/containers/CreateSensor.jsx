import React, { useState, useEffect } from 'react';

import '../styles/components/CreateSensor.scss';

const Home = (props) => {
    console.log(props.match.params)
    const [sensor, setSensor] = useState({campo: ""});
    const [brand, setBrand] = useState({campo: ""});
    const [model, setModel] = useState({campo: ""});
    const [author, setAuthor] = useState({campo: ""});
    const [temperature, setTemperature] = useState({campo: ""});
    const [description, setDescription] = useState({campo: ""});
    const [createdAt, setCreatedAt] = useState({campo: ""});
    const [sensors, setSensors] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/api/sensors', {
            method: "POST"
        })
        .then(response => response.json())
        .then(data => setSensors(data))
    }, []);
    console.log(sensors);

    const changeSensor = (e) => {
        setSensor({ ...sensor, campo: e.target.value });
    };
    const changeBrand = (e) => {
        setBrand({ ...brand, campo: e.target.value });
    };
    const changeModel = (e) => {
        setModel({ ...model, campo: e.target.value });
    };   
    const changeAuthor = (e) => {
        setAuthor({ ...author, campo: e.target.value });
    };   
    const changeTemperature = (e) => {
        setTemperature({ ...temperature, campo: e.target.value });
    };
    const changeDescription = (e) => {
        setDescription({ ...description, campo: e.target.value });
    };
    const changeCreatedAt = (e) => {
        setCreatedAt({ ...createdAt, campo: e.target.value });
    };
    console.log("Sen:", sensor.campo, "Mar:", brand.campo, "Mod:", model.campo, "Aut:", author.campo, "Tem:", temperature.campo, "Des:", description.campo, "Fec:", createdAt.campo)

    function sendSensor(e) {
        e.preventDefault();
        const newSensor = {
            id_sensor: sensor.campo,
            brand: brand.campo,
            model: model.campo,
            author: author.campo,
            temperature: temperature.campo,
            description: description.campo,
            createdAt: createdAt.campo,
        };
        fetch('http://localhost:3000/api/sensors', {
            method: "POST",
            body: JSON.stringify(newSensor),
            headers: {
                "Content-type": "application/json"
            }
        })
        .then(response => response.json())
        .then(data => console.log(data));
        window.location.href = '/sensor';
    }

    return (
        <div className="CreateSensor_container" >
            <h1>Registra una nueva medición</h1>
            <form className="CreateSensor_form" onSubmit={sendSensor} >
                <input 
                    className="CreateSensor_input"
                    type="text" 
                    name="sensor" 
                    placeholder="Id sensor" 
                    onChange={changeSensor}
                    required 
                />
                <input 
                    className="CreateSensor_input"
                    type="text" 
                    name="brand" 
                    placeholder="Marca" 
                    onChange={changeBrand}
                    required 
                />
                <input 
                    className="CreateSensor_input"
                    type="text" 
                    name="model" 
                    placeholder="Modelo" 
                    onChange={changeModel}
                    required
                />
                <input 
                    className="CreateSensor_input"
                    type="text" 
                    name="author" 
                    placeholder="Autor de la medición" 
                    onChange={changeAuthor}
                    required
                />
                <input 
                    className="CreateSensor_input"
                    type="number" 
                    name="temperature" 
                    placeholder="Temperatura"
                    onChange={changeTemperature}
                    required
                />
                <input 
                    className="CreateSensor_input"
                    type="text" 
                    name="description" 
                    placeholder="Descripción opcional" 
                    onChange={changeDescription}
                />
                <input 
                    className="CreateSensor_input"
                    type="date" 
                    name="created_at" 
                    placeholder="Fecha de medición" 
                    onChange={changeCreatedAt}
                    required
                />
                <button className="CreateSensor_input" type="submit" >
                    Guardar
                </button>
            </form>
        </div>
    )
};

export default Home;