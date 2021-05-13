import React from 'react';
import '../assets/styles/components/Search.scss';

const Search = () => {
    return (
        <section className="main">
            <h2 tabindex="0" className="main__title">¿Qué quieres ver hoy?</h2>
            <input aria-label="Buscar" className="input" type="text" placeholder="Buscar..." name="" id="" />
    </section>
    );
};

export default Search;