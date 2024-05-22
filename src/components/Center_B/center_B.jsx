import './center_B.css';

import Heading from "/src/components/heading/heading.jsx";
import Paragraph from "/src/components/paragraph/paragraph.jsx";
import Button from '../button/button';

export default function Center_B({level, headingContent, paragraphContent, buttonContent, backgroundURL}) {
    return(
        <div className="center_B">
            <img src={ backgroundURL } className="center_B__background" alt="nope"/>
            <div className="center_B__container">
                <Heading level={ level } headingContent={ headingContent }></Heading>
                <Paragraph paragraphContent={ paragraphContent }></Paragraph>
                <Button text={ buttonContent }></Button>
            </div>
        </div>
    );
}