import React, { useState, useEffect } from 'react';
import Question from './Questions';
import questions from './list_questions';
import './Game.css';

const Game = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);

  useEffect(() => {
    shuffleQuestions();
  }, []);

  const shuffleQuestions = () => {
    const shuffled = questions.sort(() => Math.random() - 0.5);
    setShuffledQuestions(shuffled);
  };

  const handleAnswer = (selectedOption) => {
    if (selectedOption === shuffledQuestions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }


    const nextQuestionIndex = currentQuestionIndex + 1;
    if (selectedOption != shuffledQuestions[currentQuestionIndex].answer) {
      setCurrentQuestionIndex(currentQuestionIndex);
    }
    else if (nextQuestionIndex < shuffledQuestions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    }
    else {
      setShowScore(true);
    }
  };

  return (
    <div className="game">
      {showScore ? (
        <div className="score-section">
          <h2>Ваш результат: {score} из {shuffledQuestions.length}</h2>
        </div>
      ) : (
        shuffledQuestions.length > 0 && (
          <Question
            questionData={shuffledQuestions[currentQuestionIndex]}
            onAnswer={handleAnswer}
          />
        )
      )}
    </div>
  );
};

export default Game;
