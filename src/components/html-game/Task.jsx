import React from 'react';
import './Task.css';

const Task = ({ task }) => {
    return (
        <div className="task">
            <h2>Задание {task.id}</h2>
            <p>{task.description}</p>
        </div>
    );
};

export default Task;
