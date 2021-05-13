import React from 'react';
import '../assets/styles/components/Categories.scss';

const Categories = ({ children, title }) => {
    return(
        <div className="categories">
            <h2 class="categories__title">{title}</h2>
            {children}
        </div>
    );
};

export default Categories;