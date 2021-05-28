import React from 'react';
import classNames from 'classnames';
import '../assets/styles/components/Footer.scss';

const Footer = (props) => {

    const { footerLogin, footerRegister} = props;

    const footerClassNames = classNames('footer', {
        footerLogin, 
        footerRegister,
    });

    return (
        <footer className={footerClassNames}>
            <a href="/">Términos de uso</a>
            <a href="/">Declaración de privacidad</a>
            <a href="/">Centro de ayuda</a>
        </footer>
    );
};

export default Footer;