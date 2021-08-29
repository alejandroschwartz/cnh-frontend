import React, { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/Header.scss';

const Header = () => {

    const [ nav, setNav ] = useState(false);

    return (
        <header className="Header" >
            <div className="Header__container" >
                <h1 className="Header__title" >
                    FANIOT
                </h1>
                <button className="Header__icon" onClick={() => setNav(!nav)} >
                    {nav === true 
                        ? <i className='fas fa-times'></i>
                        : <i className='fas fa-bars'></i>
                    }
                </button>
                <ul className={nav === false ? "Header__menu" : "Header__menu--active"} onClick={() => setNav(!nav)} >               
                    <Link to="/" className="Header__menu--list" >
                        Inicio
                    </Link>
                    <Link to="/sensor" className="Header__menu--list" >
                        Registros
                    </Link>
                    <Link to="/sensor/create" className="Header__menu--list" >
                        Nuevo registro
                    </Link>
                </ul>
            </div>
        </header>
    )
}

export default Header;