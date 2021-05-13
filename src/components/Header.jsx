import React from 'react';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo-platzivideo.png';
import userIcon from '../assets/static/user-icon.png';

const Header = () => {
    return (
        <header className="header">
            <a href="index.html">
                <img tabIndex="0" className="header__img" src={logo} alt="Logo PlatziVideo" />
            </a>
                <div className="header__menu">
                    <div className="header__menu--profile">
                        <img tabIndex="0" src={userIcon} alt="Avatar perfil" />
                            <p>Perfil</p>
                    </div>
                    <ul>
                        <li><a href="iniciar-sesion.html">Cuenta</a></li>
                        <li><a href="index.html">Cerrar Sesión</a></li>
                    </ul>
                </div>
        </header>
)};

export default Header;