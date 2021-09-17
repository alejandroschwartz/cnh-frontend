import React, { useState, useEffect } from 'react';

import '../styles/components/CreateSensor.scss';

const Home = (props) => {
    console.log(props.match.params)
    const [maquina, setMaquina] = useState({campo: ""});
    const [descripcion, setDescripcion] = useState({campo: ""});
    const [medicion, setMedicion] = useState({campo: ""});
    const [sensors, setSensors] = useState([]);

    useEffect(() => {
        fetch('https://localhost:5001/api/mediciones', {
            method: "POST"
        })
        .then(response => response.json())
        .then(data => setSensors(data))
    }, []);
    console.log(sensors);
 
    const changeMaquina = (e) => {
        setMaquina({ ...maquina, campo: e.target.value });
    };
    const changeDescripcion = (e) => {
        setDescripcion({ ...descripcion, campo: e.target.value });
    };
    const changeMedicion = (e) => {
        setMedicion({ ...medicion, campo: e.target.value });
    };
    console.log("Maq:", maquina.campo, "Des:", descripcion.campo, "Med:", medicion.campo)

    function sendSensor(e) {
        e.preventDefault();
        const newSensor = {
            maquina: maquina.campo,
            descripcion: descripcion.campo,
            medicion: medicion.campo,
        };
        fetch('https://localhost:5001/api/mediciones', {
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
            <img className="CreateSensor_img" src="../styles/images/080.png" alt="" />
            <form className="CreateSensor_form" onSubmit={sendSensor} >
                <input 
                    className="CreateSensor_input"
                    type="number" 
                    name="maquina" 
                    placeholder="Máquina"
                    onChange={changeMaquina}
                    required
                />
                <input 
                    className="CreateSensor_input"
                    type="text" 
                    name="medicion" 
                    placeholder="Medición" 
                    onChange={changeMedicion}
                    required
                />
                <input 
                    className="CreateSensor_input"
                    type="text" 
                    name="descripcion" 
                    placeholder="Descripción opcional" 
                    onChange={changeDescripcion}
                />
                <button className="CreateSensor_button" type="submit" >
                    GUARDAR
                </button>
            </form>
        </div>
    )
};

export default Home;