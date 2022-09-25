import React from "react";

function Contact(props) {
    return (
        <div className="contact">
            <img src={props.source} alt=""/>
            <span>{props.contact}</span>
        </div>
    )
}

export default Contact;