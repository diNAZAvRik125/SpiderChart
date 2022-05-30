import React from "react";
import styles from './MainBar.module.css'
import {Heart} from "../../icons/heart.svg";
import BarLink from "./BarLink";
// import {PersonalInfo} from "../../icons";

export default function StudentBar() {
    return (
        <div className={styles.list}>
            <BarLink to="/cabinet/student/info" name="Анкета" />
            <BarLink to="/cabinet/student/projects" name="Мои проекты" />
        </div>
    )
}
