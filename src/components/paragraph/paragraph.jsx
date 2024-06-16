import './paragraph.css';

export default function Paragraph({ paragraphContent, variant }) {
    return (
        <p className={variant ? "paragraph " + (variant): "paragraph"}>{ paragraphContent }</p>
    );
}