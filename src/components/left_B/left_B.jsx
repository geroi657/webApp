import "./left_B.css";
import Heading from "../heading/heading";
import Paragraph from "../paragraph/paragraph";
import Button from "../button/button";

export default function Left_B({level, backgroundURL, headingContent, paragraphContent, buttonContent}) {
    return (
        <div className="left_B">
            <div className="left_B__container">
                <Heading level={ level } headingContent={ headingContent }></Heading>
                <Paragraph paragraphContent={ paragraphContent }></Paragraph>
                <a href="https://www.youtube.com/watch?v=LzkTbS2PXNM&pp=ygUYeW91IHNob3VsZCBraWxsIHlvdXIgbm93">
                <Button text={ buttonContent }></Button>
                </a>
            </div>
            <div className="overlap">
                <img className="left_B__background" src={`${backgroundURL}`} alt="bleb" />
                <div className="gradient"></div>
            </div>
        </div>
    );
}