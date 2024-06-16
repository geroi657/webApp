import Board from "../board/board.jsx";
import Sidebar from "../sidebar/sidebar.jsx";
import './grid-game.css';
import { useState } from 'react';

const GridGame = () => {
    const [currentLevel, setCurrentLevel] = useState(() => {
        const savedLevel = localStorage.getItem('currentLevel');
        return savedLevel !== null ? Number(savedLevel) : 0;
    });

    return (
        <div id="css-grid">
            <Sidebar currentLevel={currentLevel} setCurrentLevel={setCurrentLevel}/>
            <Board currentLevel={currentLevel}/>
        </div>
    );
};

export default GridGame;
