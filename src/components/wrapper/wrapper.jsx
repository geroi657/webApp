import './wrapper.css';

export default function Wrapper({children, variant}) {
    return (
        <div className={variant ? "wrapper " + (variant): "wrapper"}>{children}</div>
    );
}