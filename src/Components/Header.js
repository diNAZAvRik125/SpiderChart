import React from "react";
import styles from '../App.module.css'
import logo from "../Components/icons/gazprom-neft-logo-rus.svg"

export function HeaderPre() {
    return (
        <header>
            <div className={styles.header}>
                <div className={styles.logo_mobile}>
                    <img src={logo} alt={"Газпром Нефть"}/>
                </div>
            </div>
        </header>
    )
}


export const Header = (HeaderPre)

