import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; // proveer todo el estado a nuestro componente
import gravatar from '../utils/gravatar';
import { logoutRequest } from '../actions/index.js'; // action encargado de cerrar sesión 

import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo-platzivideo.png';
import userIcon from '../assets/static/user-icon.png';

const Header = (props) => {

    const { user } = props; // destructurar para usar user en lugar de props.user
    const hasUser = Object.keys(user).length > 0; // validación

    const handleLogout = () => {
        props.logoutRequest({}); // manda payload, que en este caso es un objeto vacio
    };

    return (
        <header className="header">
            <Link to="/">
                <img tabIndex="0" className="header__img" src={logo} alt="Logo PlatziVideo" />
            </Link>
            <div className="header__menu">
                <div className="header__menu--profile">
                    {hasUser ?
                        <img src={gravatar(user.email)} alt={user.email} />
                        :
                        <img tabIndex="0" src={userIcon} alt="Avatar perfil" />
                    }
                    <p>Perfil</p>
                </div>
                <ul>
                    {hasUser ?
                        <li>
                            <Link to="/">
                                {user.name}
                            </Link>
                        </li>
                        :
                        null
                    }

                    {hasUser ?
                        <li>
                            <Link to="#logout" onClick={handleLogout}>
                                Cerrar Sesión
                            </Link>
                        </li>
                        :
                        <li>
                            <Link to="/login">
                                Iniciar Sesión
                            </Link>
                        </li>
                    }
                </ul>
            </div>
        </header>
    )
};

const mapStateToProps = (state) => { // encargado de mapear las propiedades del estado que estamos requiriendo en este componente
    return {
        user: state.user
    };
};

const mapDispatchToProps = { // ecargado de todas las acciones que tenemos que disparar (enviar) a nuestro documento
    logoutRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header); // encargado de conectar los props que estamos trayendo y los dispatch que vamos a usar dentro del componente