import "./left_B.css";

import Heading from "../heading/heading";
import Paragraph from "../paragraph/paragraph";
import Button from "../button/button";

export default function Left_B({level, backgroundURL, headingContent, paragraphContent, buttonContent, buttonHref}) {

    function showAlert() {
        alert("Works");
    }

    return (
        <div className="left_B">
            <div className="left_B__container">
                <Heading level={ level } headingContent={ headingContent }></Heading>
                <Paragraph paragraphContent={ paragraphContent }></Paragraph>
                <Button text={ buttonContent } href={ buttonHref }></Button>
            </div>
            <div className="overlap">
                <img className="left_B__background" src={`${backgroundURL}`} alt="bleb" />
                <div className="gradient"></div>
            </div>
        </div>
    );
}