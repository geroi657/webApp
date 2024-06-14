import Button from '../button/button.jsx';
import './navigation.css';
import {Link} from "react-router-dom";

export default function Navigation() {
    return (
    <nav className='navigation'>
        <Link relative="path" to={"/"}><Button variant="nav logo" text={"WA"}></Button></Link>
        <Button variant="nav" text={"HTML"}></Button>
        <Button variant="nav" text={"Grid Garden"} href={"/css-grid-garden"}></Button>
        <Button variant="nav" text={"Broken Quiz"} href={"/css-quiz"}></Button>
    </nav>
    )
}