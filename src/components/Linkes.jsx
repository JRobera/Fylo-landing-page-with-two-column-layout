import React, { useState } from "react";

function Linkes (props) {
    const [isMouseOver, setIsMouseOver] = useState(false);

    function handleMouseOver () {
        setIsMouseOver(true);
    }
    function handleMouseOut () {
        setIsMouseOver(false);
    }

    return <p>
            <a href="#" style={isMouseOver ? {color: "#5a64a8"} : null} 
                onMouseOver={handleMouseOver} 
                onMouseOut={handleMouseOut}>{props.linkName}</a>
        </p>

}

export default Linkes;