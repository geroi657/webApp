import React from 'react';
import TravelBlogPage from './TravelBlogPage';

const Visualizer = ({ htmlCode }) => {
    return (
        <div className="visualizer">
            <TravelBlogPage replacement={<div dangerouslySetInnerHTML={{ __html: htmlCode }} />} />
        </div>
    );
};

export default Visualizer;
