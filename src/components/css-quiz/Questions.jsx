import React, { useState } from 'react';

const Question = ({ questionData, onAnswer }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = () => {
    onAnswer(selectedOption);
  };

  return (
    <div className="question">
      <h2>{questionData.question}</h2>
      {questionData.options.map((option, index) => {
        const optionClass = (option === questionData.answer) ? 'correct' : 'incorrect';
        return (
          <div key={index} className={optionClass}>
            <input
              type="radio"
              id={`option-${index}`}
              name="option"
              value={option}
              checked={selectedOption === option}
              onChange={handleChange}
            />
            <label htmlFor={`option-${index}`}>{option}</label>
          </div>
        );
      })}
      <button onClick={handleSubmit}>Отправить</button>
    </div>
  );
};

export default Question;
