import React from "react";
import styles from './Register.module.css'
import {email, minLength8, phone, required} from "./validators";
import {SimpleInput} from "../inputs";
import {Button} from "../buttons/btn";
import {Field, reduxForm} from "redux-form";

export const passwordsMustMatch = (value, allValues) =>
    value !== allValues.password ?
        'Пароли должны совпадать' :
        undefined


function RegisterFormPreRedux(props) {
    const {submitting} = props

    return (
        <form onSubmit={props.handleSubmit}>
            <div className={styles.block}>
                <h2 className={styles.blockTitle}>Личная информация</h2>
                <Field type="text" component={SimpleInput} name='last_name' label='Фамилия' validate={[required]}/>
                <Field type="text" component={SimpleInput} name='first_name' label='Имя' validate={[required]}/>
                <Field type="text" component={SimpleInput} name='middle_name' label='Отчество'/>
                <Field type="text" component={SimpleInput} name='city' label='Город'/>
            </div>
            <div className={styles.block}>
                <h2 className={styles.blockTitle}>Контактная информация</h2>
                <Field type="text" component={SimpleInput} name='phone' label='Телефон' validate={[required, phone]}/>
                <Field type="text" component={SimpleInput} name='email' label='Email' validate={[required, email]}/>
                <Field type="password" component={SimpleInput} name='password' label='Пароль'
                       validate={[required, minLength8]}/>
                <Field type="password" component={SimpleInput} name='re_password' label='Повторите пароль'
                       validate={[required, passwordsMustMatch]}/>
            </div>
            {/*<div className={styles.block_captcha}>*/}
            {/*    <img alt={'captcha'} src={`data:image/png;base64,${props.data.captcha_image}`}*/}
            {/*         className={styles.captcha_img}/>*/}
            {/*    <div style={{'width': '100%'}}>*/}
            {/*        <Field type="text" component={SimpleInput} name='captcha_value' label='Введите код с картинки'*/}
            {/*               validate={[required]}/>*/}
            {/*    </div>*/}
            {/*    /!*<img alt={'reload_captcha'} className={styles.reload_img} onClick={() => {*!/*/}
            {/*    /!*    props.updateCaptcha()*!/*/}
            {/*    /!*}}/>*!/*/}
            {/*</div>*/}
            <div className={styles.block}>
                <Button type="submit" disabled={submitting} className={styles.btn}>
                    Зарегистрироваться
                </Button>
            </div>
        </form>
    )
}

export const RegisterForm = reduxForm({form: 'register-base'})(RegisterFormPreRedux)

