import React from "react";

function Form(props){
    return (
    <form className={props.classname}>
        <input type="email" placeholder={props.placeholder}/>
        <button>{props.btnName}</button>
    </form>)
}

export default Form;