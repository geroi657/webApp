import "./left_B.css";

import Heading from "../heading/heading";
import Paragraph from "../paragraph/paragraph";
import Button from "../button/button";

export default function Left_B({level, headingContent, paragraphContent, buttonContent}) {
    return (
        <div className="left_B">
            <div className="left_B__container">
                <Heading level={ level } headingContent={ headingContent }></Heading>
                <Paragraph paragraphContent={ paragraphContent }></Paragraph>
                <Button text={ buttonContent }></Button>
            </div>
            <div className="overlap">
                <img className="left_B__background" src="/src/assets/giphy.gif" alt="bleb" />
                <div className="gradient"></div>
            </div>
        </div>
    );
}