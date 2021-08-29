import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/Footer.scss';

const Footer = () => {
    return (
        <div>
            <div className="Footer__altillo" >
                <div className="Footer__altillo--div" >
                    <h2>FANIOT</h2>
                    <p><strong>Parque Industrial Posadas</strong></p>
                    <p>Calle 60 y 229 - Paraje Nemesio Parma</p>
                    <p>Misiones, Posadas (3300)</p>
                </div>
                <div className="Footer__altillo--div" >
                    <p>¡Síguenos en las redes!</p>
                    <a href="https://www.facebook.com/Faniot-Argentina-102593284729500">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href="https://www.instagram.com/faniotargentina/">
                        <i className="fab fa-instagram"></i>
                    </a>
                </div>
            </div>
            <footer className="footer">
                <div className="footer__div">
                    <p className="footer__div--p">Diseño de página: <br />
                        <strong>Alejandro Matías Schwartz</strong> <br />
                        <small>Ciudad de Córdoba, Argentina</small>
                    </p>
                </div>
            </footer>
        </div>
    )
}

export default Footer;