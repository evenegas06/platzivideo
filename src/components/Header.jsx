import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo-platzivideo.png';
import userIcon from '../assets/static/user-icon.png';

const Header = () => {
    return (
        <header className="header">
            <Link to="/">
                <img tabIndex="0" className="header__img" src={logo} alt="Logo PlatziVideo" />
            </Link>
                <div className="header__menu">
                    <div className="header__menu--profile">
                        <img tabIndex="0" src={userIcon} alt="Avatar perfil" />
                        <p>Perfil</p>
                    </div>
                    <ul>
                        <li>
                            <Link to="/">
                                Cuenta
                            </Link>
                        </li>
                        <li>
                            <Link to="/login">
                                Iniciar Sesión
                            </Link>
                        </li>
                    </ul>
                </div>
        </header>
)};

export default Header;