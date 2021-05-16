import React from 'react';
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';
import '../assets/styles/components/Login.scss';


const Login = () => {
    return (
        <section className="login">
            <section className="login__container">
                <h2 tabIndex="0">Inicia Sesión</h2>
                <form className="login__container--form" action="">
                    <input aria-label="Correo" className="input-sesion" placeholder="Correo" type="text" />
                    <input aria-label="Contraseña" className="input-sesion" placeholder="Contraseña" type="text" />
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
                    No tienes ninguna cuenta <a href="registro.html">Regístrate</a>
                </p>
            </section>
        </section>
    );
};

export default Login;