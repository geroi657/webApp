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

    const handleFocus = (e) => {
        if (e.target.value === 'Введите ваш HTML код здесь') {
            setInput('');
        }
    };

    const handleBlur = (e) => {
        if (e.target.value.trim() === '') {
            setInput('Введите ваш HTML код здесь');
        }
    };

    return (
        <form className="answer-form" onSubmit={handleSubmit}>
      <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder="Введите ваш HTML код здесь"
      />
            <button type="submit">Отправить</button>
        </form>
    );
};

export default AnswerForm;
