import './sidebar.css'

import levels from '../grid-game/levels.js'
import { useState, useEffect, useRef } from 'react'

const Sidebar = () => {
    const [currentLevel, setCurrentLevel] = useState(() => {
        const savedLevel = localStorage.getItem('currentLevel');
        return savedLevel !== null ? Number(savedLevel) : 0;
    });
    const [before, setBefore] = useState('');
    const [after, setAfter] = useState('');
    const [userCode, setUserCode] = useState(() => {
        return localStorage.getItem('userCode') || '';
    });
    const [isCorrect, setIsCorrect] = useState(null);
    const [fadeClass, setFadeClass] = useState('');
    const [guessHistory, setGuessHistory] = useState(() => {
        const savedHistory = localStorage.getItem('guessHistory');
        return savedHistory ? JSON.parse(savedHistory) : [];
    });
    const nextButtonRef = useRef(null);

    const goToPreviousLevel = () => {
        if (currentLevel > 0) {
            setCurrentLevel(currentLevel - 1);
        }
    };

    const goToNextLevel = () => {
        if (currentLevel < levels.length - 1) {
            setCurrentLevel(currentLevel + 1);
        }
    };

    useEffect(() => {
        setBefore(levels[currentLevel].before);
        setAfter(levels[currentLevel].after);
        setUserCode('');
        setIsCorrect(null);
        setGuessHistory([]);
    }, [currentLevel]);

    useEffect(() => {
        localStorage.setItem('currentLevel', currentLevel);
    }, [currentLevel]);

    useEffect(() => {
        localStorage.setItem('userCode', userCode);
    }, [userCode]);

    useEffect(() => {
        localStorage.setItem('guessHistory', JSON.stringify(guessHistory));
    }, [guessHistory]);

    const handleCodeChange = (e) => {
        setUserCode(e.target.value);
    };

    const handleNextButtonClick = () => {
        try {
            const userStyle = userCode.trim();
            const requiredStyle = levels[currentLevel].style;

            const requiredStyleString = Object.entries(requiredStyle)
            .map(([key, value]) => `${key}: ${value};`)
            .join(' ');

            console.log(userStyle, "\n", requiredStyleString);

            const updatedGuessHistory = [...guessHistory, userStyle];
            setGuessHistory(updatedGuessHistory);

            if (userStyle === requiredStyleString) {
                setIsCorrect(true);
                setFadeClass('correct fade');
                setTimeout(() => {
                    setFadeClass('');
                    goToNextLevel();
                }, 1000);
            } else {
                setIsCorrect(false);
                setFadeClass('incorrect fade');
                setTimeout(() => {
                    setFadeClass('');
                }, 1000);
            }
        } catch (e) {
            setIsCorrect(false);
            setFadeClass('incorrect fade');
            setTimeout(() => {
                setFadeClass('');
            }, 1000);
        }
    };

    const handleTextareaKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            nextButtonRef.current.click();
        }
    };

    return (
        <div id="sidebar">
            <div id="levelsWrapper">
                <br/>
                <p>
                    <button onClick={goToPreviousLevel}>&lt;</button>
                    <span>Смена уровня</span>
                    <button onClick={goToNextLevel}>&gt;</button>
                </p>
                <br/>
                <div id="levels" dangerouslySetInnerHTML={{ __html: levels[currentLevel].instructions }}></div>
            </div>
            <div id="editor">
                <div id="css">
                    <div className="line-numbers">1<br/>2<br/>3<br/>4<br/>5<br/>6<br/>7<br/>8<br/>9<br/>10<br/>11<br/>12<br/>13<br/>14</div>
                    <pre id="before">{before}</pre>
                    <textarea
                        id="code"
                        autoFocus
                        autoCapitalize="none"
                        value={userCode}
                        onChange={handleCodeChange}
                        onKeyPress={handleTextareaKeyPress}>
                    </textarea>
                    <pre id="after">{after}</pre>
                </div>
                <button id="next" className={`translate ${fadeClass}`} onClick={handleNextButtonClick} ref={nextButtonRef}>Next</button>
            </div>
            <div id="guessHistory">
                <h3>Guess History</h3>
                <ul>
                    {guessHistory.map((guess, index) => (
                        <li key={index}>{guess}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Sidebar