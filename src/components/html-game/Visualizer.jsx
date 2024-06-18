// Visualizer.jsx
import React from 'react';
import './Visualizer.css';


const Visualizer = ({ htmlCode }) => {
    return (
        <div className="preview" dangerouslySetInnerHTML={{ __html: htmlCode }}></div>
    );
};

export default Visualizer;
