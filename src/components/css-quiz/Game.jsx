import React, { useState, useEffect } from 'react';
import Question from './questions';
import questions from './list_questions';
import './game.css';
import Button from '../button/button';
import Intro from './intro';

const Game = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [showIntro, setShowIntro] = useState(true);

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
    if (selectedOption !== shuffledQuestions[currentQuestionIndex].answer) {
      setCurrentQuestionIndex(currentQuestionIndex);
    } else if (nextQuestionIndex < shuffledQuestions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setShowScore(true);
    }
  };

  const startGame = () => {
    setShowIntro(false);
  };

  return (
    <div className="game">
      {showIntro ? (
        <Intro startGame={startGame} />
      ) : showScore ? (
        <div className="score-section">
          <h2>Вы молодцы! Ваш результат: {score} из {shuffledQuestions.length}!</h2>
          <Button variant={"button"} text="Выйти" href={"/"}></Button>
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
