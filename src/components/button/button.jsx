import './button.css';

export default function Button({text, variant}) {
    return (
    <button className={variant ? "button " + (variant): "button"}>{ text }</button>
    );
}