import React, { useState } from 'react';
import Task from './Task';
import AnswerForm from './AnswerForm';
import Visualizer from './Visualizer';
import './HTMLGame.css';

const tasks = [
    { id: 1, description: "Добавьте заголовок уровня H1.", expectedHtml: "<h1></h1>" },
    { id: 2, description: "Создайте параграф.", expectedHtml: "<p></p>" },
    { id: 3, description: "Добавьте изображение.", expectedHtml: '<img />' },
    { id: 4, description: "Создайте ссылку.", expectedHtml: '<a href="https://example.com"></a>' },
    { id: 5, description: "Добавьте ненумерованный список.", expectedHtml: "<ul></ul>" },
    { id: 6, description: "Создайте нумерованный список.", expectedHtml: "<ol></ol>" },
    { id: 7, description: "Добавьте кнопку.", expectedHtml: "<button></button>" },
    { id: 8, description: "Создайте текстовое поле.", expectedHtml: '<input type="text" />' },
    { id: 9, description: "Добавьте заголовок второго уровня с текстом.", expectedHtml: "<h2></h2>" },
    { id: 10, description: "Создайте таблицу.", expectedHtml: "<table></table>" }
];

const HTMLGame = () => {
    const [htmlCodes, setHtmlCodes] = useState(tasks.map(() => ''));
    const [selectedTask, setSelectedTask] = useState(tasks[0]);
    const [errorMessage, setErrorMessage] = useState('');

    const handleAnswerSubmit = (code) => {
        const updatedHtmlCodes = htmlCodes.map((htmlCode, index) =>
            index === selectedTask.id - 1 ? code : htmlCode
        );

        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = code.trim();

        const expectedHtmlTags = document.createElement('div');
        expectedHtmlTags.innerHTML = selectedTask.expectedHtml.trim();

        // Check if all expected tags are present in user's HTML
        let allTagsPresent = true;
        expectedHtmlTags.childNodes.forEach((expectedTag) => {
            const tagName = expectedTag.tagName.toLowerCase();
            if (!tempDiv.querySelector(tagName)) {
                allTagsPresent = false;
            }
        });

        if (allTagsPresent) {
            setErrorMessage('');
            setHtmlCodes(updatedHtmlCodes);
        } else {
            setErrorMessage('Неправильный HTML код. Попробуйте снова.');
        }
    };

    const handleTaskSelect = (task) => {
        setSelectedTask(task);
        setErrorMessage('');
    };

    const displayHtml = htmlCodes.join('');

    return (
        <div className="game-container">
            <div className="left-column">
                <div className="task-list">
                    {tasks.map((task) => (
                        <button
                            key={task.id}
                            onClick={() => handleTaskSelect(task)}
                            className={`task-button ${task.id === selectedTask.id ? 'active' : ''}`}
                        >
                            Задание {task.id}
                        </button>
                    ))}
                </div>
                <Task task={selectedTask} />
                <AnswerForm onAnswerSubmit={handleAnswerSubmit} initialCode={htmlCodes[selectedTask.id - 1]} />
                {errorMessage && <p className="error-message">{errorMessage}</p>}
            </div>
            <div className="right-column">
                <Visualizer htmlCode={displayHtml} />
            </div>
        </div>
    );
};

export default HTMLGame;
