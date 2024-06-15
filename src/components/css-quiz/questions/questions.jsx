import React, { useState, useEffect } from 'react';
import './questions.css';
import Button from '../../button/button';

const Question = ({ questionData, onAnswer }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [description, setDescription] = useState("");
  const [shuffledOptions, setShuffledOptions] = useState([]);

  useEffect(() => {
    setShuffledOptions(shuffleArray(questionData.options));
  }, [questionData]);

  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
    setDescription(questionData.description[e.target.value]); 
  };

  const handleSubmit = () => {
    if (selectedOption) {
      onAnswer(selectedOption);
      setDescription("");
    }
  };

  return (
    <div className="question">
      <h2>{questionData.question}</h2>
      {shuffledOptions.map((option, index) => {
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
      <Button text={"Ответить"} buttonFunction={handleSubmit}></Button>
      {description && <p className="description">{description}</p>}
    </div>
  );
};

export default Question;
