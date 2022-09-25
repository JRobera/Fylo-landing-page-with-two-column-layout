import React from "react";

function Logo(props){
    return (
    <div className="logo">
        <img src={props.source}  style={{width: "100px"}} alt="Logo"/>
    </div>)
}

export default Logo;