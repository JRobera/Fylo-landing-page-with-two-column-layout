import React, { useState } from "react";

function Icon(props){
    const [isMouseOver,setIsMouseOver] = useState(false);

    function handleMouseOver() {
        setIsMouseOver(true);
    }

    function handleMouseOut() {
        setIsMouseOver(false);
    }

    return (
        <a href={props.url} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <img style={isMouseOver ? {filter: "invert(61%) sepia(57%) saturate(3082%) hue-rotate(40deg) brightness(192%) contrast(70%)", width: "25px", height: "25px"} : {width: "25px", height: "25px"}} src={props.source} alt="" />
        </a>
    )
}

export default Icon;