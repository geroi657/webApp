import './center_B.css';

import Heading from "/src/components/heading/heading.jsx";
import Paragraph from "/src/components/paragraph/paragraph.jsx";
import Button from '../button/button';
import { Link } from 'react-router-dom';

export default function Center_B({level, backgroundURL, headingContent, paragraphContent, buttonContent, buttonHref}) {
    return(
        <div className="center_B">
            <img src={ backgroundURL } className="center_B__background" alt="nope"/>
            <div className="center_B__container">
            <Heading level={ level } headingContent={ headingContent }></Heading>
                <Paragraph paragraphContent={ paragraphContent }></Paragraph>
                <Link to={ buttonHref }><Button text={ buttonContent }></Button></Link>
            </div>
        </div>
    );
}