import Button from '../button/button.jsx';
import './navigation.css';

export default function Navigation() {
    return (
    <nav className='navigation'>
        <Button variant="nav logo" text={'WA'}></Button>
        <Button variant="nav" text={'HTML'}></Button>
        <Button variant="nav" text={'CSS'}></Button>
        <Button variant="nav" text={'JavaScript'}></Button>
        <Button variant="nav right" text={'LOGIN'}></Button>
    </nav>
    )
}