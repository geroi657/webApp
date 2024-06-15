import "./footer.css"

import Button from "../button/button";
import Paragraph from "../paragraph/paragraph";

export default function Footer({ 
    buttonHref1, text1,
    buttonHref2, text2,
    buttonHref3, text3,
    buttonHref4, text4,
    paragraphContent1,
    paragraphContent2,
    paragraphContent3,
    paragraphContent4}){
    return (
        <div className="footer">
            <div className="footerWrapper">
                <div className="footerWrapperBlock">
                    <Button variant="logo footerLogo" buttonHref={ buttonHref1 } text={ text1 }></Button>
                    <Paragraph variant="footerParagraph" paragraphContent={ paragraphContent1 }></Paragraph>
                    <Paragraph variant="footerParagraph" paragraphContent={ paragraphContent2 }></Paragraph>
                    <Paragraph variant="footerParagraph" paragraphContent={ paragraphContent3 }></Paragraph>
                </div>
                <div className="footerWrapperBlock">
                    <Button variant="footerLink" buttonHref={ buttonHref2 } text={ text2 }></Button>
                    <Button variant="footerLink" buttonHref={ buttonHref3 } text={ text3 }></Button>
                    <Button variant="footerLink" buttonHref={ buttonHref4 } text={ text4 }></Button>
                </div>
            </div>
            <Paragraph variant="footerParagraphRight" paragraphContent={ paragraphContent4 }></Paragraph>
        </div>
    )
}