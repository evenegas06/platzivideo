import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { loginRequest } from '../actions/index';

import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';
import '../assets/styles/components/Login.scss';


const Login = (props) => {

    const [form, setValues] = useState({
        email: '',
    }); 
    
    const handleInput = (event) => {
        setValues({
            ...form,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event) => {
        // evitar el comportamiento por default de html de enviar la información por url
        event.preventDefault();
        props.loginRequest(form);

        // si ha cumplido con los elementos para hacer login, será redirigido al Home
        props.history.push('/');
        console.log(form);
    };

    return (
        <section className="login">
            <section className="login__container">
                <h2 tabIndex="0">Inicia Sesión</h2>
                <form className="login__container--form" action="" onSubmit={handleSubmit}>
                    <input className="input-sesion" 
                        name="email"
                        type="text" 
                        placeholder="Correo" 
                        aria-label="Correo"
                        onChange={handleInput}
                    />
                    <input className="input-sesion" 
                        name="password"
                        placeholder="Contraseña" 
                        type="password" 
                        aria-label="Contraseña"
                        onChange={handleInput}
                    />
                    <button className="button-sesion">Iniciar sesión</button>
                    <div className="login__container--remember-me">
                        <label>
                            <input aria-label="Recordar mis datos" type="checkbox" name="cbox1" id="cbox1" value="checkbox" />Recuérdame
                        </label>
                        <a href="/">Olvidé mi contraseña</a>
                    </div>
                </form>
                <section className="login__container--social-media">
                    <div>
                        <img src={googleIcon} alt="Google" />
                        Inicia sesión con Google
                    </div>
                    <div>
                        <img src={twitterIcon} alt="Twitter" />
                        Inicia sesión con Twitter
                    </div>
                </section>
                <p className="login__container--register">
                    No tienes ninguna cuenta 
                    <Link to="/register">
                        Regístrate
                    </Link>
                </p>
            </section>
        </section>
    );
};

const mapDispatchToProps = {
    loginRequest,
};

// export default Login;
export default connect(null, mapDispatchToProps)(Login);