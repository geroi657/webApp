import React, { useState, useEffect } from 'react';
import './AnswerForm.css';

const AnswerForm = ({ onAnswerSubmit, initialCode }) => {
    const [input, setInput] = useState(initialCode);

    useEffect(() => {
        setInput(initialCode);
    }, [initialCode]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onAnswerSubmit(input);
    };

    return (
        <form className="answer-form" onSubmit={handleSubmit}>
            <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Введите ваш HTML код здесь"
            />
            <button type="submit">Отправить</button>
        </form>
    );
};

export default AnswerForm;
