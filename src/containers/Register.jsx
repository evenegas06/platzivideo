import React from 'react';
import '../assets/styles/components/Login.scss';

const Register = () => {
    return (
        <section className="login">
            <section className="login__container">
                <h2 tabIndex="0">Regístrate</h2>
                <form className="login__container--form" action="">
                    <input aria-label="Nombre" className="input-sesion" placeholder="Nombre" type="text" />
                    <input aria-label="Correo" className="input-sesion" placeholder="Correo" type="text" />
                    <input aria-label="Contraseña" className="input-sesion" placeholder="Contraseña" type="text" />
                    <button className="button-sesion">Registrarme</button>
                </form>
                <p className="login__container--register">
                    <a href="index.html">Iniciar sesión</a>
                </p>
            </section>
        </section>
    );
};

export default Register;