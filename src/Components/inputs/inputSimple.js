import React from "react";
import styles from "./input.module.css"
import MainStyles from "../../MainStyles.module.css"

export function SimpleInput(props) {
    const {
        // defaultValue,
        disabled = false,
        input,
        projName,
        label,
        type,
        meta: {touched, error},
        show_on_touch = true
    } = props;
    // const [value, setValue] = useState(defaultValue?.toString() !== undefined ? defaultValue?.toString() :  input.value);
    // console.log('SimpleInput', defaultValue?.toString(), input.value, value)
    return (
        <div>
            <input {...input} onChange={(v) => {
                // setValue(v.value);
                input.onChange(v);
            }} placeholder={label} type={type} value={input.value} disabled={disabled}
                   className={styles.simple + " " + MainStyles.hint + " " +  (projName ? styles.prName : "") + " " + (touched && error ? styles.error : "")}
                   style={props.stylecomp && {marginTop: "0.53rem"}}/>
            {(touched || !show_on_touch) && ((error &&
                <span className={styles.errorMessage}>{Array.isArray(error) ? error.map(s =>
                    <React.Fragment>{s}<br/></React.Fragment>) : error}</span>))}
        </div>
    )
}
