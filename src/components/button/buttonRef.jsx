import './button.css';
import { forwardRef } from 'react';

const ButtonRef = forwardRef(({text, variant, href, buttonFunction}, ref) => {
    return (
        <a
            className={variant ? "button " + (variant): "button"}
            href= { href }
            onClick={ buttonFunction }
            ref={ ref }
        >
            { text }
        </a>
    );
});

export default ButtonRef;