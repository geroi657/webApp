import './sidebar.css';
import levels from '../grid-game/levels.js';
import { useState, useEffect, useRef } from 'react';
import Button from '../../../button/button.jsx';
import ButtonRef from '../../../button/buttonRef.jsx';

const Sidebar = ({ currentLevel, setCurrentLevel}) => {
    const [before, setBefore] = useState('');
    const [after, setAfter] = useState('');
    const [isCorrect, setIsCorrect] = useState(null);
    const [fadeClass, setFadeClass] = useState('');
    const [userCode, setUserCode] = useState('');
    const [guessHistory, setGuessHistory] = useState([]);
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
        applyUserStyle(userCode);
    }, [userCode]);

    useEffect(() => {
        localStorage.setItem('guessHistory', JSON.stringify(guessHistory));
    }, [guessHistory]);

    const handleCodeChange = (e) => {
        const newUserCode = e.target.value;
        setUserCode(newUserCode);
        applyUserStyle(newUserCode);

        if (newUserCode.trim() === '') {
            resetTreatmentStyles();
        }
    };
    

    const applyUserStyle = (styleString) => {
        const level = levels[currentLevel];

        if (level.selector) {
            const elements = document.querySelectorAll('#garden' + level.selector);
            elements.forEach(element => {
                const parsedStyles = parseCSSString(styleString);
                Object.keys(parsedStyles).forEach(property => {
                    element.style[property] = parsedStyles[property];
                });
                
            });
        }
    };

    const parseCSSString = (cssString) => {
        const rules = cssString.split(';')
            .map(rule => rule.trim())
            .filter(Boolean)
            .reduce((acc, rule) => {
                const [property, ...values] = rule.split(':').map(part => part.trim());
                if (property && values.length > 0) {
                    acc[property] = values.join(':'); // Сохраняем пробелы в значениях
                }
                return acc;
            }, {});
        return rules;
    };
    
    const handleNextButtonClick = () => {
        try {
            const userStyle = userCode.trim();
            const requiredStyle = levels[currentLevel].style;

            const parsedUserStyle = parseCSSString(userStyle);
            const parsedRequiredStyle = parseCSSString(
                Object.entries(requiredStyle)
                    .map(([key, value]) => `${key}: ${value};`)
                    .join(' ')
            );

            const updatedGuessHistory = [...guessHistory, userStyle];
            setGuessHistory(updatedGuessHistory);

            if (JSON.stringify(parsedUserStyle) === JSON.stringify(parsedRequiredStyle)) {
                setIsCorrect(true);
                triggerFade('correct');
                setTimeout(goToNextLevel, 1000);
            } else {
                setIsCorrect(false);
                triggerFade('incorrect');
            }
        } catch (e) {
            setIsCorrect(false);
            triggerFade('incorrect');
        }
    };

    const triggerFade = (fadeType) => {
        setFadeClass(`${fadeType} fade`);
        setTimeout(() => setFadeClass(''), 1000);
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
                <div id="levelsChange">
                    <Button text="&lt;" buttonFunction={goToPreviousLevel}/>
                    <span id="levelChangeSpan">Смена уровня</span>
                    <Button text="&gt;" buttonFunction={goToNextLevel}/>
                </div>
                <div id="levels" dangerouslySetInnerHTML={{ __html: levels[currentLevel].instructions }}></div>
            </div>
            <div id="editor">
                <div id="css">
                    <div className="line-numbers">1<br />2<br />3<br />4<br />5<br />6<br />7<br />8<br />9<br />10<br />11<br />12<br />13<br />14</div>
                    <pre id="before">{before}</pre>
                    <textarea
                        id="code"
                        autoFocus
                        autoCapitalize="none"
                        value={userCode}
                        onChange={handleCodeChange}
                        onInput={(e) => applyUserStyle(e.target.value)}
                        onKeyPress={handleTextareaKeyPress}>
                    </textarea>
                    <pre id="after">{after}</pre>
                    <ButtonRef
                        text="Next"
                        variant={`translate ${fadeClass}`}
                        buttonFunction={handleNextButtonClick}
                        ref={nextButtonRef}
                    />
                </div>
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
    );
};

export default Sidebar;
