import React from 'react';
import Astronauta from '../assets/static/astronauta.svg';
import { Link } from 'react-router-dom';

import '../assets/styles/components/NotFound.scss';

const NotFound = () => {
    return (
        <div className="xD">
            <div className="notFound">
                <img className="slidein" src={Astronauta} alt="" />
                <h2>Lo sentimos. Página no encontrada.</h2>
                <Link to="/">
                    Volver al Home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;