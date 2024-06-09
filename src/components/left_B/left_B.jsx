import "./left_B.css";
import Heading from "../heading/heading";
import Paragraph from "../paragraph/paragraph";
import Button from "../button/button";
import { Link } from "react-router-dom";

export default function Left_B({level, backgroundURL, headingContent, paragraphContent, buttonContent}) {
    return (
        <div className="left_B">
            <div className="left_B__container">
                <Heading level={ level } headingContent={ headingContent }></Heading>
                <Paragraph paragraphContent={ paragraphContent }></Paragraph>
                <Link to="/css-grid-garden"><Button text={ buttonContent }></Button></Link>
            </div>
            <div className="overlap">
                <img className="left_B__background" src={`${backgroundURL}`} alt="bleb" />
                <div className="gradient"></div>
            </div>
        </div>
    );
}