import React from 'react';

import '../styles/components/Home.scss';

const Home = () => {
    return (
        <div className="Home" >

            <img className="Home__hero" src="../styles/images/portada.png" alt="" />

            <h1>Productos destacados</h1>

            <div className="Home__container" >

                <div className="Item">
                    <div className="Item__container" >
                        <img className="Item__image" src="../styles/images/sensor1.png" />
                    </div>
                    <div className="Item__text" >
                        <h2 className="Item__title" >
                            Termómetro Inteligente IOT IR - 1000
                        </h2>
                        <p>
                            Potente termómetro Infrarrojo inteligente IOT, para mediciones SIN CONTACTO. Con amplio rango para medición de temperaturas (-70 a 382°C); resolución de +/- 0.02 °C. Su versatilidad permite diferentes modos de uso. Ofrece conexión SIN CARGO a FANIOT App, lo que permite al usuario visualizar datos en Tiempo Real en su dispositivo móvil.
                        </p>
                    </div>
                </div>

                <div className="Item">
                    <div className="Item__container" >
                        <img className="Item__image" src="../styles/images/sensor2.png" />
                    </div>
                    <div className="Item__text" >
                        <h2 className="Item__title" >
                            Termómetro Inteligente IOT IRR - 1000
                        </h2>
                        <p>
                            Este termómetro, incorpora tecnología RFID a las características IOT, para la realización de mediciones de temperaturas SIN CONTACTO en comercios, instituciones educativas, fábricas. Permite a su vez, trazabilidad de las mediciones realizadas, haciendo del mismo una herramienta eficaz en la identificación de estados febriles. 
                        </p>
                    </div>
                </div>

                <div className="Item">
                    <div className="Item__container" >
                        <img className="Item__image" src="../styles/images/sensor3.png" />
                    </div>
                    <div className="Item__text" >
                        <h2 className="Item__title" >
                            Termómetro Inteligente IRM - 1000
                        </h2>
                        <p>
                            Este integrante de la familia de Termómetros Infrarrojos inteligentes, posee un mango ergonómico para realizar mediciones instantáneas sobre objetos y personas. Comparte la precisión y calidad de los IR-1000 en un formato manual, fácil de transportar con pantalla OLED de alta definición que facilita la visualización de las mediciones.
                        </p>
                    </div>
                </div>

            </div>

        </div>
    )
};

export default Home;