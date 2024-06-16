import './section.css';

export default function Section({children, variant}){
    return (
        <section className={variant ? "section " + (variant): "section"}>{ children } </section>
    );
}