import './button.css';

export default function Button({text, variant, href}) {

    return (
    <a className={variant ? "button " + (variant): "button"} href= { href }>{ text }</a>
    );
}