import React from 'react';
import './Theory.css';

const Theory = ({ theory }) => {
    return (
        <div className="theory">
            <h2>Теория</h2>
            <p>{theory}</p>
        </div>
    );
};

export default Theory;
