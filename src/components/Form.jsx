import React, { useState } from "react";

function Form(props){
    const [isMouseOver, setIsMouseOver] = useState(false);
    const [isValid, setIsValid] = useState(true);

    function handleMouseOver(){
        setIsMouseOver(true);
    }
    
    function handleMouseOut(){
        setIsMouseOver(false);
    }

    function isEmail(emailAdress){
        let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
      if (emailAdress.match(regex)) 
        return setIsValid(true); 
       else 
        return setIsValid(false); 
    }

    function handleSubmit (event){  
        const emailAdress = event.target.email.value;
        isEmail(emailAdress);    
        
        event.preventDefault(); 
    }
    function handleChange(event){
        const {name, value} = event.target;
        
    }
    return (
    <form className={props.classname} action="Form.jsx" onSubmit={handleSubmit}>
      <div className="input-cont">
           <input onChange={handleChange} type="email" name="email" placeholder={props.placeholder}/>
           { !isValid ? <p className="error-message">Please check your email</p> : null }
      </div>  
        <button name="btn" style={ isMouseOver ? {backgroundColor: "#6b9bff"} : null } onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} >{props.btnName}</button>
    </form>)
}

export default Form;