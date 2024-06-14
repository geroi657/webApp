import './board.css';
import React, { useEffect, useState, useRef } from 'react';
import levels from '../grid-game/levels.js';

const Board = ({ currentLevel }) => {
    const plantsRef = useRef(null);
    const gardenRef = useRef(null);

    const [gridTemplate, setGridTemplate] = useState("repeat(5, 1fr) / repeat(5, 1fr)");

    const level = levels[currentLevel];

    useEffect(() => {
        clearElement(plantsRef.current);
        clearElement(gardenRef.current);

        document.getElementById('soil').removeAttribute('style');
        document.getElementById('overlay').removeAttribute('style');

        loadPlantsAndGarden(level);

        if (level.classes) {
            for (const rule in level.classes) {
                document.querySelectorAll(rule).forEach(el => el.classList.add(level.classes[rule]));
            }
        }

        const selector = level.selector || '';
        if (selector) {
            document.querySelectorAll(`#plants ${selector}`).forEach(el => {
                Object.assign(el.style, level.style);
            });
        }
    }, [currentLevel, level]);



    const clearElement = (element) => {
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
    };

    const loadPlantsAndGarden = (level) => {
        const colors = {
            'c': 'carrot',
            'w': 'weed'
        };

        level.board.split('').forEach(c => {
            const color = colors[c];
            if (color) {
                const plant = createDivWithClass(`plant ${color}`);
                const treatment = createDivWithClass(`treatment ${color}`);

                appendChildWithClass(plant, 'bg');
                appendChildWithClass(treatment, 'bg');

                plantsRef.current.appendChild(plant);
                gardenRef.current.appendChild(treatment);
            }
        });
    };

    const createDivWithClass = (className) => {
        const div = document.createElement('div');
        div.className = className;
        return div;
    };

    const appendChildWithClass = (parent, className) => {
        const child = document.createElement('div');
        child.className = className;
        parent.appendChild(child);
    };

    return (
        <div id="board" style={{ gridTemplate }}>
            <div id="overlay">
                {Array.from({ length: 40 }, (_, i) => (
                    <span key={i} className="plot"></span>
                ))}
            </div>
            <div id="plants" ref={plantsRef}></div>
            <div id="garden" ref={gardenRef}></div>
            <div id="soil">
                {Array.from({ length: 40 }, (_, i) => (
                    <span key={i} className="plot"></span>
                ))}
            </div>
        </div>
    );
};

export default Board;
