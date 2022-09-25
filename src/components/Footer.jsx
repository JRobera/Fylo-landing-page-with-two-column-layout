import React from "react";
import Logo from "./Logo";
import Contact from "./Contact.jsx";
import Icon from "./Icon.jsx";

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
                    <p><a href="#">About Us</a></p>
                    <p><a href="#">Jobs</a></p>
                    <p><a href="#">Press</a></p>
                    <p><a href="#">Blog</a></p>
                </div>

                <div>
                    <p><a href="#">Contact Us</a></p>
                    <p><a href="#">Terms</a></p>
                    <p><a href="#">Privacy</a></p>
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