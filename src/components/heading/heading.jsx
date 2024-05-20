import "./heading.css";

export default function Heading({ level, headingContent }) {
    
    const Heading = level ? 'h' + `${level}` : 'h1';
    
    return (
        <Heading className={ level ? 'h' + `${level}` : 'h1' }>{ headingContent }</Heading>
    );
}