import React from "react";
import styles from './Header.module.css'
// import {connect} from "react-redux";
import logo from "../Components/icons/gazprom-neft-logo-rus.svg"
// import {NavLink} from "react-router-dom";
// import {NavLink, useHistory} from "react-router-dom";
// import LeftBar from "../../screens/Cabinet/LeftBar";


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

