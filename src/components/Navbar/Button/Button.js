import React from "react";
import './Button.css'

const STYLE = [
    'btn--primary',
    'btn--outline',
    'btn--signup'
]

const SIZE = [
    'btn--medium',
    'btn--large'
]

export const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {

    const checkButtonStyle = STYLE.includes(buttonStyle) ? buttonStyle :STYLE[0]
    const checkButtonSize = SIZE.includes(buttonSize) ? buttonSize :STYLE[0]

    return (
        <button className={`btn ${checkButtonStyle} ${checkButtonSize}`} onClick={onClick} type={type}>
            {children}
        </button>
    )
}