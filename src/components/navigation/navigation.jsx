import Button from '../button/button.jsx';
import './navigation.css';
import {Link} from "react-router-dom";

export default function Navigation() {
    return (
    <nav className='navigation'>
        <Link to="/" relative='path'><Button variant="nav logo" text={'WA'} ></Button></Link>
        <Button variant="nav" text={'HTML'}></Button>
        <Link to="/css-grid-garden"><Button variant="nav" text={'Grid Garden'}></Button></Link>
        <Link to="/css-quiz"><Button variant="nav" text={'Broken Quiz'}></Button></Link>
    </nav>
    )
}