import React, {useEffect, useState} from "react";
import styles from "../../components/forms/Register.module.css"
import {RegisterForm} from '../../components/forms/Register';
import {useDispatch, useSelector} from "react-redux";
// import {register} from "../../../redux/reducers/userReducer";
import {Redirect} from "react-router-dom";
// import {api_connector} from "../../../redux/api/UserApi";
import {SubmissionError} from "redux-form";
// import {Loader} from "../../../components/uiKit/Loader";


export function Register() {
    // const dispatch = useDispatch();
    // const isRegistered = useSelector((state) => state.user.isReady)
    // const [captcha, setCaptcha] = useState([]);
    // const [isLoading, setIsLoading] = useState(true)
    // const [update, setUpdate] = useState(false)
    //
    // function updateCaptcha() {
    //     api_connector.getCaptcha().then(r => r.data).then(d => {
    //         if (d) {
    //             setCaptcha(d);
    //             setIsLoading(false);
    //         }
    //     }).catch((e) => {
    //         console.error(e)
    //     })
    // }
    //
    // useEffect(updateCaptcha
    //     , [update])
    //
    // if (isLoading) {
    //     return (<Loader/>)
    // }
    //
    // if (isRegistered) {
    //     return (<Redirect to="/auth/login"/>)
    // }


    return (
        <div className={styles.containerAuth}>
            <h1 className={styles.title}> Регистрация </h1>
            <div className={styles.formBlock}>
                {/*<RegisterForm data={captcha} updateCaptcha={updateCaptcha} onSubmit={val => {*/}
                {/*    val = {*/}
                {/*        ...val,*/}
                {/*        captcha_key: captcha.captcha_key,*/}
                {/*    }*/}
                {/*    return api_connector.createUser(val).then((_) => {*/}
                {/*        dispatch(register())*/}
                {/*    }).catch((e) => {*/}
                {/*        setUpdate(!update)*/}
                {/*        console.error(e, 'RegisterForm')*/}
                {/*        if (e.response.status === 400) {*/}
                {/*            throw new SubmissionError(e.response.data)*/}
                {/*        }*/}
                {/*    })*/}
                {/*}} className={styles.formBlock}/>*/}
                <RegisterForm/>
            </div>
        </div>
    )
}