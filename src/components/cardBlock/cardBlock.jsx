import Heading from "../heading/heading";
import Paragraph from "../paragraph/paragraph";
import Card from "../card/card";

export default function CardBlock({level, headingContent, paragraphContent}) {
    return (
        <div className="cardBlock-wrapper">
            <Heading level={ level } headingContent={ headingContent }></Heading>
            <Paragraph paragraphContent={ paragraphContent }></Paragraph>
            <div className="cardBlock">
                <Card backgroundURL="" headingContent="" paragraphContent=""></Card>
                <Card backgroundURL="" headingContent="" paragraphContent=""></Card>
                <Card backgroundURL="" headingContent="" paragraphContent=""></Card>
            </div>
        </div>
    );
}