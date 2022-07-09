import React from "react";
import Styles from "../App.module.css";
import MainStyles from '../App.module.css';
import user_logo from "./icons/user-logo.svg"
import self_test_logo from "./icons/self-test-logo.svg"
import test_logo from "./icons/test-logo.svg"
import chart_logo from "./icons/chart-logo.svg"
import events_logo from "./icons/events-logo.svg"


const Bar = () => {
    return(
        <div className={Styles.BarField}>
            <ul type={'none'}>
                <li>
                    <button className={Styles.FunctionalButton}>
                        <div className={Styles.ButtonIcon}>
                            <div className={Styles.ButtonLogo}>
                                <img src={user_logo} alt={"Личный кабинет"}/>
                            </div>
                        </div>
                        <div className={MainStyles.buttonText} style={{fontWeight: '500' }}>Личный кабинет</div>
                    </button>
                </li>
                <li>
                    <button className={Styles.FunctionalButton}>
                        <div className={Styles.ButtonIcon}>
                            <div className={Styles.ButtonLogo}>
                                <img src={self_test_logo} alt={"Самооценка"}/>
                            </div>
                        </div>
                        <div className={MainStyles.buttonText} style={{fontWeight: '500' }}>Самооценка</div>
                    </button>
                </li>
                <li>
                    <button className={Styles.FunctionalButton}>
                        <div className={Styles.ButtonIcon}>
                            <div className={Styles.ButtonLogo}>
                                <img src={test_logo} alt={"Тест"}/>
                            </div>
                        </div>
                        <div className={MainStyles.buttonText} style={{fontWeight: '500' }}>Тест</div>
                    </button>
                </li>
                <li>
                    <button className={Styles.FunctionalButton}>
                        <div className={Styles.ButtonIcon}>
                            <div className={Styles.ButtonLogo}>
                                <img src={chart_logo} alt={"Диаграмма"}/>
                            </div>
                        </div>
                        <div className={MainStyles.buttonText} style={{fontWeight: '500' }}>Диаграмма</div>
                    </button>
                </li>
                <li>
                    <button className={Styles.FunctionalButton}>
                        <div className={Styles.ButtonIcon}>
                            <div className={Styles.ButtonLogo}>
                                <img src={events_logo} alt={"Мероприятия"}/>
                            </div>
                        </div>
                        <div className={MainStyles.buttonText} style={{fontWeight: '500' }}>Мероприятия</div>
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default Bar;
