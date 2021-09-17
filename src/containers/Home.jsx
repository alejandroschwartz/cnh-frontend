import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/Home.scss';

const Home = () => {
    return (
        <div className="Home" >

            <div className="Hero" >
                <div className="Hero__container" >
                    <h1 className="Hero__title" >TECNOLOGÍA QUE TE ACERCA <br />
                    <strong> A UN NUEVO NIVEL 
                    DE PRODUCTIVIDAD.</strong></h1>
                    <Link to="/" className="Hero__button" >
                        CONOCÉ MÁS
                    </Link>
                </div>
                <div className="Hero__container" >
                    <img className="Hero__image" src="../styles/images/cosechadora.jpg" alt="" />
                </div>
            </div>

            <h1>Productos destacados</h1>

            <div className="Home__container" >

                <div className="Item">
                    <div className="Item__container" >
                        <img className="Item__image" src="../styles/images/famall.png" />
                    </div>
                    <div className="Item__text" >
                        <h2 className="Item__title" >
                            Tractores
                        </h2>
                    </div>
                </div>

                <div className="Item">
                    <div className="Item__container" >
                        <img className="Item__image" src="../styles/images/cosechadora-img.jpeg" />
                    </div>
                    <div className="Item__text" >
                        <h2 className="Item__title" >
                            Cosechadora
                        </h2>
                    </div>
                </div>

                <div className="Item">
                    <div className="Item__container" >
                        <img className="Item__image" src="../styles/images/sembradora.jpg" />
                    </div>
                    <div className="Item__text" >
                        <h2 className="Item__title" >
                            Carro neumático
                        </h2>
                    </div>
                </div>

            </div>

        </div>
    )
};

export default Home;