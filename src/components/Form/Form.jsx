import React from "react";
import {Input} from "../../common/Input";
import cl from "./form.module.css";
import style from "../../common/commonStyle.module.css";
import {faReact} from "@fortawesome/free-brands-svg-icons/faReact";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons/faEnvelope";

export const Form = () => {
    //<i class="fab fa-viber"></i>
    //<i class="fab fa-telegram-plane"></i>
    let mail= [<FontAwesomeIcon icon={faEnvelope}/>,'mail']
    return (
        <div id={'contact'} className={cl.contacts}>
            <div className={`${style.container} ${cl.container}`}>
                <div className={cl.textBlock}>
                    <h3>Ut ullam corporis suscipit</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore mag</p>
                </div>
                <form className={cl.form}>
                    <h4>you can write me ;-)</h4>
                   <div className={cl.inputWrap}> <Input type={'text'} placeholder={'name'}/></div>
                   <div className={cl.inputWrap}> <Input type={'text'} placeholder={'mail'}/></div>
                   <div className={cl.inputWrap}> <Input type={'text'} placeholder={'viber'}/></div>
                  <div className={cl.inputWrap}>  <Input type={'text'} placeholder={'telegram'}/></div>
                   <div className={cl.btnWrap}> <button className={cl.btn}>send</button></div>

                </form>
            </div>
        </div>
    )
}