import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './components/header/header.jsx';
import { Main } from './components/pages/main.jsx';
import GridGame from './components/css-grid/components/grid-game/grid-game.jsx'

export default function App() {
  return (
    <>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/css-grid-garden" element={<GridGame/>}/>
        </Routes>
      </Router>
    </>
  )
};