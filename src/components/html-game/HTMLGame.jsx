import React, { useState } from 'react';
import Task from './Task';
import AnswerForm from './AnswerForm';
import Visualizer from './Visualizer';
import './HTMLGame.css';

const tasks = [
    { id: 1, description: "Добавьте заголовок уровня H1 с текстом 'Sample text'.", expectedHtml: "<h1>Sample text</h1>" },
    { id: 2, description: "Создайте параграф с текстом 'This is a paragraph'.", expectedHtml: "<p>This is a paragraph</p>" },
    { id: 3, description: "Добавьте изображение с атрибутом src указывающим на 'image.jpg'.", expectedHtml: '<img src="image.jpg" />' },
    { id: 4, description: "Создайте ссылку на 'https://example.com' с текстом 'Visit Example'.", expectedHtml: '<a href="https://example.com">Visit Example</a>' },
    { id: 5, description: "Добавьте ненумерованный список с тремя элементами.", expectedHtml: "<ul><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>" },
    { id: 6, description: "Создайте нумерованный список с двумя элементами.", expectedHtml: "<ol><li>Item 1</li><li>Item 2</li></ol>" },
    { id: 7, description: "Добавьте кнопку с текстом 'Click Me'.", expectedHtml: "<button>Click Me</button>" },
    { id: 8, description: "Создайте текстовое поле с плейсхолдером 'Enter your name'.", expectedHtml: '<input type="text" placeholder="Enter your name" />' },
    { id: 9, description: "Добавьте div с классом 'container'.", expectedHtml: '<div class="container"></div>' },
    { id: 10, description: "Создайте элемент span с текстом 'Inline text'.", expectedHtml: "<span>Inline text</span>" }
];

const Game = () => {
    const [htmlCode, setHtmlCode] = useState('');
    const [selectedTask, setSelectedTask] = useState(tasks[0]);
    const [errorMessage, setErrorMessage] = useState('');
    const [displayHtml, setDisplayHtml] = useState('<div style="background: black; width: 100%; height: 50px;"></div>');

    const handleAnswerSubmit = (code) => {
        setHtmlCode(code);
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = code.trim();

        if (tempDiv.innerHTML === selectedTask.expectedHtml) {
            setErrorMessage('');
            setDisplayHtml(code);
        } else {
            setErrorMessage('Неправильный HTML код. Попробуйте снова.');
        }
    };

    const handleTaskSelect = (task) => {
        setSelectedTask(task);
        setHtmlCode(''); // Очистить код при выборе нового задания
        setErrorMessage(''); // Очистить сообщение об ошибке при выборе нового задания
        setDisplayHtml('<div style="background: black; width: 100%; height: 50px;"></div>'); // Обновить шаблон для нового задания
    };

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
                <AnswerForm onAnswerSubmit={handleAnswerSubmit} initialCode={htmlCode} />
                {errorMessage && <p className="error-message">{errorMessage}</p>}
            </div>
            <div className="right-column">
                <Visualizer htmlCode={displayHtml} />
            </div>
        </div>
    );
};

export default Game;
