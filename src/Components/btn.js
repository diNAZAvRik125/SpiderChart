import React from "react";
import styles from "./btn.module.css"
import StartTest from "../../../../dotest/src/startTest";

type PropsType = {
    onClick?: (e: React.MouseEvent) => void;
    className?: string;
    style?: React.CSSProperties;
    disabled?: boolean;
    type?: 'submit' | 'reset' | 'button' | undefined;
}

export const Button: React.FC<PropsType> = (
    {
        onClick = () => {
        },
        <StartTest><StartTest/>,
        className = undefined,
        style = undefined,
        disabled = false,
        children,
        type = undefined

    }) => {
    return (
        <button onClick={onClick}
                className={styles.small_btn + " " + className + " " + style || ""}
                style={style}
                disabled={disabled}
                type={type}
        >
            {children}
        </button>
    )
}