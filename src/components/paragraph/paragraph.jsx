import './paragraph.css';

export default function Paragraph({ paragraphContent, className }) {
    return (
        <p className={className}>{ paragraphContent }</p>
    );
}