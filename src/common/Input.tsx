import {ChangeEvent, useState} from "react";
import React from "react";
type inputType={
    type:string
    placeholder:string
}
export const Input=(props:inputType)=>{
    let[value,setValue]=useState('')
    const onChangeHandler=(e:ChangeEvent<HTMLInputElement>)=>{
        setValue(e.currentTarget.value)
    }
    return(
        <input type="props.type" value={value} onChange={onChangeHandler} placeholder={props.placeholder}/>
    )
}