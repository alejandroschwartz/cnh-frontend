import React, { useState, useEffect } from 'react';

import '../styles/components/CreateMedition.scss';

const CreateSensor = (props) => {
    console.log(props.match.params)
    const [piezaId, setPiezaId] = useState({campo: ""});
    const [medicionDescripcion, setMedicionDescripcion] = useState({campo: ""});
    const [medicion, setMedicion] = useState({campo: ""});
    const [sensors, setSensors] = useState([]);
    useEffect(() => {
        fetch('https://localhost:5001/api/mediciones', { method: "POST" })
        .then(response => response.json())
        .then(data => setSensors(data))
    }, []);
    console.log(sensors);
    const changePiezaId = (e) => {
        setPiezaId({ ...piezaId, campo: e.target.value });
    };
    const changeDescripcion = (e) => {
        setMedicionDescripcion({ ...medicionDescripcion, campo: e.target.value });
    };
    const changeMedicion = (e) => {
        setMedicion({ ...medicion, campo: e.target.value });
    };
    console.log("Maq:", piezaId.campo, "Des:", medicionDescripcion.campo, "Med:", medicion.campo)
    function sendMedicion(e) {
        e.preventDefault();
        const newSensor = {
            piezaId: piezaId.campo,
            medicionDescripcion: medicionDescripcion.campo,
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
        window.location.href = '/pieza';
    }

    return (
        <div className="CreateMedition_container" >
            <h1>Registra una nueva medición</h1>
            <img className="CreateMedition_img" src="../styles/images/080.png" alt="" />
            <form className="CreateMedition_form" onSubmit={sendMedicion} >
                <input 
                    className="CreateMedition_input"
                    type="number" 
                    name="piezaId" 
                    placeholder="Id Pieza"
                    onChange={changePiezaId}
                    required
                />
                <input 
                    className="CreateMedition_input"
                    type="text" 
                    name="medicion" 
                    placeholder="Medición" 
                    onChange={changeMedicion}
                    required
                />
                <input 
                    className="CreateMedition_input"
                    type="text" 
                    name="medicionDescripcion" 
                    placeholder="Descripción opcional" 
                    onChange={changeDescripcion}
                />
                <button className="CreateMedition_button" type="submit" >
                    GUARDAR
                </button>
            </form>
        </div>
    )
};

export default CreateSensor;