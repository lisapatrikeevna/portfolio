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
        <div className={cl.contacts}>
            <div className={`${style.container} ${cl.container}`}>
                <div className={cl.textBlock}>
                    <h3>Ut ullam corporis suscipit</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore mag</p>
                </div>
                <form className={cl.form}>
                    <h4>you can write me ;-)</h4>
                   <span className={cl.inputWrap}> <Input type={'text'} placeholder={'name'}/></span>
                   <span className={cl.inputWrap}> <Input type={'text'} placeholder={mail}/></span>
                   <span className={cl.inputWrap}> <Input type={'text'} placeholder={'viber'}/></span>
                  <span className={cl.inputWrap}>  <Input type={'text'} placeholder={'telegram'}/></span>
                   <span className={cl.btnWrap}> <button className={cl.btn}>send</button></span>

                </form>
            </div>
        </div>
    )
}