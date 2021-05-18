import React from 'react';
import Astronauta from '../assets/static/astronauta.svg';

import '../assets/styles/components/NotFound.scss';

const NotFound = () => {
    return (
        <div className="xD">
            <div className="notFound">
                <img className="slidein" src={Astronauta} alt="" />
                <h2>Lo sentimos. Página no encontrada.</h2>
                <a href="#">Volver al Home</a>
            </div>
        </div>
    );
};

export default NotFound;