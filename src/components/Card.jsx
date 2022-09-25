import React from "react";
import Avatar from "./Avatar";

function Card() {
    return (
        <div className="card">
            <img style={{width: "15px", height: "15px"}}src="../images/icon-quotes.svg" alt="quotes"/>
            <p>Fylo has improved our team productivity by an order of magnitude. Since 
               making the switch our team has become a well-oiled collaboration machine.</p>

            <div className="detail">
                <Avatar source="../images/avatar-testimonial.jpg" />
                <p className="name">Kyle Burton</p>
                <p className="company">Founder & CEO, Huddle</p>
            </div>
        </div>
    )
}

export default Card;