import React, {useState} from 'react';
import { connect } from 'react-redux';
import { registerRequest } from '../actions/index.js'
import { Link } from 'react-router-dom';
import Header from "../components/Header";
import Footer from "../components/Footer";

import '../assets/styles/components/Login.scss';

const Register = (props) => {

    const [form, setValues] = useState({
        email: '',
        name: '',
        password: '',
    });

    const handleInput = (event) => {
        setValues({
            ...form,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(form);
        props.registerRequest(form);
        props.history.push("/");
    };

    return (
        <React.Fragment >
            <Header isRegister />
            <section className="login">
                <section className="login__container">
                    <h2 tabIndex="0">Regístrate</h2>
                    <form className="login__container--form" action="" onSubmit={handleSubmit}>
                        <input className="input-sesion"
                            name="name"
                            placeholder="Nombre" 
                            type="text" 
                            aria-label="Nombre" 
                            onChange={handleInput}
                        />
                        <input className="input-sesion" 
                            name="email"
                            placeholder="Correo" 
                            type="text" 
                            aria-label="Correo"
                            onChange={handleInput}
                        />
                        <input className="input-sesion"
                            name="password"
                            placeholder="Contraseña" 
                            type="text" 
                            aria-label="Contraseña"
                            onChange={handleInput}
                        />
                        <button className="button-sesion">Registrarme</button>
                    </form>
                    <p className="login__container--register">
                        <Link to="/login">
                            Iniciar Sesión
                        </Link>
                    </p>
                </section>
            </section>
            <Footer footerRegister />
        </React.Fragment>
    );
};

const mapDispatchYoProps = {
    registerRequest,
};

export default connect(null, mapDispatchYoProps)(Register);