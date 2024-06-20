import React, { useState } from 'react';
import Task from './Task';
import AnswerForm from './AnswerForm';
import Visualizer from './Visualizer';
import Theory from './Theory';
import './HTMLGame.css';

const tasks = [
    { id: 1, description: "Добавьте заголовок уровня H1.", expectedHtml: "<h1></h1>", theory: "Элемент <h1> используется для обозначения заголовка самого высокого уровня. В HTML есть шесть уровней заголовков, от <h1> до <h6>." },
    { id: 2, description: "Создайте параграф.", expectedHtml: "<p></p>", theory: "Элемент <p> используется для создания параграфов текста. Параграфы автоматически имеют отступы сверху и снизу." },
    { id: 3, description: "Добавьте изображение.", expectedHtml: '<img />', theory: "Элемент <img> используется для вставки изображений. Необходимо указать атрибут src для определения пути к изображению." },
    { id: 4, description: "Создайте ссылку.", expectedHtml: '<a href="https://example.com"></a>', theory: "Элемент <a> используется для создания ссылок. Атрибут href указывает URL, на который будет вести ссылка." },
    { id: 5, description: "Добавьте ненумерованный список.", expectedHtml: "<ul></ul>", theory: "Элемент <ul> используется для создания ненумерованных списков, <li> - для элементов списка." },
    { id: 6, description: "Создайте нумерованный список.", expectedHtml: "<ol></ol>", theory: "Элемент <ol> используется для создания нумерованных списков, которые обычно отображаются с числами." },
    { id: 7, description: "Добавьте кнопку.", expectedHtml: "<button></button>", theory: "Элемент <button> используется для создания кнопок, текст кнопки нужно указывать между тегов." },
    { id: 8, description: "Создайте текстовое поле.", expectedHtml: '<input type="text" />', theory: "Элемент <input type='text'> используется для создания однострочных текстовых полей, в которые пользователи могут вводить текст." },
    { id: 9, description: "Добавьте заголовок второго уровня", expectedHtml: "<h2></h2>", theory: "Элемент <h2> используется для обозначения заголовка второго уровня. Обычно используется для подразделов." },
    { id: 10, description: "Создайте таблицу.", expectedHtml: "<table></table>", theory: "Элемент <table> используется для создания таблиц. Таблицы состоят из строк (<tr>) и ячеек (<td> или <th>)." }
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
                <Theory theory={selectedTask.theory} />
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
