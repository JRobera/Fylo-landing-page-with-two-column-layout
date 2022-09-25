import React from "react";

function Icon(props){
    return (
        <a href={props.url}>
            <img style={{width: "25px", height: "25px"}} src={props.source} alt="" />
        </a>
    )
}

export default Icon;