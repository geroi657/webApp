import './button.css';

export default function Button({text, variant, href, buttonFunction}) {
    return (
    <a className={variant ? "button " + (variant): "button"} href= { href } onClick={ buttonFunction }>{ text }</a>
    );
}