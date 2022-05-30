import React, {Component, useState} from 'react'
import style from "../App.module.css";

class ButtonStartTest extends Component{
    onClick = (event) => {
        this.setState({time: event.target.innerText})
    };

    jump(){
        window.location.assign('https://vk.com/shestakova__d');
    };

    render(){
    return(
        <div>
            <button className={style.small_btn} onClick={() => this.jump()}>Пройти тест</button>
        </div>
    )
    }
}

export default ButtonStartTest;