import "./left_B.css";

import Heading from "../heading/heading";
import Paragraph from "../paragraph/paragraph";
import Button from "../button/button";

export default function Left_B({level, headingContent, paragraphContent}) {    
    return (
        <div className="left_B">
            <Heading level={ "1" } headingContent={ "Хочешь стать Python разработчиком?" }></Heading>
            <Paragraph paragraphContent={"Параграф Параграф Параграф Параграф Параграф Параграф Параграф Параграф Параграф Параграф"}></Paragraph>
            <Button text={"Кнопка"}></Button>
        </div>
    );
}