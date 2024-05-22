import Heading from "/src/components/heading/heading.jsx";
import Paragraph from "/src/components/paragraph/paragraph.jsx";

export default function Center_B(level, headingContent, paragraphContent) {
    <div className="center_B">
        <div className="center_B__container">
            <Heading level={ level } headingContent={ headingContent }></Heading>
            <Paragraph paragraphContent={ paragraphContent }></Paragraph>
        </div>
    </div>
}