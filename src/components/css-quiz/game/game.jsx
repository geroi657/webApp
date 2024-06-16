import React, { useState, useEffect } from 'react';
import Question from '../questions/questions';
import list_questions from '../list_questions/list_questions';
import './game.css';
import Button from '../../button/button';
import Intro from '../intro/intro';

const Game = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [showIntro, setShowIntro] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [completedCategory, setCompletedCategory] = useState(false);

  useEffect(() => {
    if (selectedCategory) {
      shuffleQuestions(selectedCategory);
    }
  }, [selectedCategory]);

  const shuffleQuestions = (category) => {
    const questionsInCategory = list_questions.find(
      (item) => item.category === category
    );
    if (!questionsInCategory) {
      setShuffledQuestions([]);
      return;
    }
    const shuffledQuestions = shuffleArray(questionsInCategory.questions);
    setShuffledQuestions(shuffledQuestions);
    setShowIntro(false);
    setCompletedCategory(false);
  };

  const handleAnswer = (selectedOption) => {
    if (selectedOption === shuffledQuestions[currentQuestionIndex].answer) {
      setScore(score + 1);
    }

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < shuffledQuestions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setShowScore(true);
      setCompletedCategory(true);
    }
  };

  const returnIntro = () => {
    setCurrentQuestionIndex(0); 
    setScore(0);
    setShowScore(false); 
    setShuffledQuestions([]); 
    setSelectedCategory("");
    setShowIntro(true);
    setCompletedCategory(false);
  };

  const restartCategory = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setShowScore(false);
    setShuffledQuestions(shuffleArray(list_questions.find(item => item.category === selectedCategory).questions));
    setCompletedCategory(false);
  };

  const selectCategory = (category) => {
    setSelectedCategory(category);
  };

  const shuffleArray = (array) => {
    const shuffled = array.slice();
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  return (
    <div className="game">
      {showIntro ? (
        <Intro startGame={() => setShowIntro(false)} selectCategory={selectCategory} />
      ) : showScore ? (
        <div className="score-section">
          <h2>Вы молодцы! Ваш результат: {score} из {shuffledQuestions.length}!</h2>
          <Button variant={"button"} text="Заново" buttonFunction={restartCategory}></Button>
          <Button variant={"button"} text="Выйти" buttonFunction={returnIntro}></Button>
        </div>
      ) : (
        <div>
          {shuffledQuestions.length > 0 && (
            <Question
              questionData={shuffledQuestions[currentQuestionIndex]}
              onAnswer={handleAnswer}
            />
          )}
          <Button variant={"quit"} text="Выйти" buttonFunction={returnIntro}></Button>
        </div>
      )}
    </div>
  );
};

export default Game;
