import styles from "./MainBar.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default function ({icon, name, to}) {
    return (
        <NavLink exact to={to} className={styles.link} activeClassName={styles.active}>
            <div className={styles.image}>
                {icon}
            </div>
            <div>
                {name}
            </div>
        </NavLink>
    )
}
