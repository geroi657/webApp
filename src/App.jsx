import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/header/header.jsx';
import { Main } from './components/pages/main.jsx';
import GridGame from './components/css-grid/components/grid-game/grid-game.jsx'
import QuizGame from './components/css-quiz/game/game.jsx';
import HTMLGame from './components/html-game/HTMLGame.jsx'

export default function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/html-game" element={<HTMLGame/>}/>
          <Route path="/css-grid-garden" element={<GridGame/>}/>
          <Route path="/css-quiz" element={<QuizGame/>}/>
        </Routes>
      </Router>
    </>
  )
};