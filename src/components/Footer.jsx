import React from 'react';

import '../styles/components/Footer.scss';

const Footer = () => {
    return (
        <div>
            <div className="Footer__altillo" >
                <div className="Footer__altillo--div" >
                    <img 
                        className="Footer__title" 
                        src="../styles/images/case-ih.png" 
                        alt="logo case ih" 
                    />
                    <p><strong>Case IH y CNH Industrial Capital son marcas registradas de CNH Industrial America LLC.</strong></p>
                    <p>© 2021 CNH Industrial América LLC. Todos los derechos reservados.</p>
                </div>
                <div className="Footer__altillo--div" >
                    <p>¡Síguenos en las redes!</p>
                    <a href="">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a href="">
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