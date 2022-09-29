import React, { useState } from "react";
import Logo from "./Logo";
import Contact from "./Contact.jsx";
import Icon from "./Icon.jsx";
import Linkes from "./Linkes";

function Footer(){

    return (
        <footer>
            <div>
                <Logo source="../images/logo-two.svg" />
                
                <Contact source="../images/icon-phone.svg" contact="Phone: +1-543-123-4567" />
                <Contact source="../images/icon-email.svg" contact="example@fylo.com" />

            </div>
            <div className="linkes">

                <div>
                    <Linkes linkName="About Us" />
                    <Linkes linkName="Jobs" />
                    <Linkes linkName="Press" />
                    <Linkes linkName="Blog" />
                </div>

                <div>
                    <Linkes linkName="Contact Us" />
                    <Linkes linkName="Terms" />
                    <Linkes linkName="Privacy" />
                </div>

            </div>

            <div className="sociales">
                <Icon url="" source="../images/facebook.svg" />
                <Icon url="" source="../images/square-twitter.svg" />
                <Icon url="" source="../images/instagram.svg" />
            </div>

        </footer>
    )
}

export default Footer;