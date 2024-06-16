import Button from '../button/button.jsx';
import './navigation.css';
import { Link } from "react-router-dom"

export default function Navigation() {
    return (
    <nav className='navigation'>
        <Link to="/"><Button variant="nav logo" text={'WA'}></Button></Link>
        <Link to="/html-game"><Button variant="nav" text={'HTML'}></Button></Link>
        <Link to="/css-grid-garden"><Button variant="nav" text={'CSS Grid'}></Button></Link>
        <Link to="/css-quiz"><Button variant="nav" text={'CSS Quiz'}></Button></Link>
    </nav>
    )
}