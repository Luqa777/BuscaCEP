import React from 'react';
import buttonTypes from "@/app/utils/buttonTypes";

interface ButtonProps {
    children?: React.ReactNode,
    variant: string
}

const Button = ({children, variant}: ButtonProps) => {
    const buttonStyle = buttonTypes[variant] || buttonTypes["default"];
    return (
        <button className={buttonStyle}>
            {children}
        </button>
    );
};

export default Button;