import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";

function Header(){
    return (
        <div className="header">
            <Logo source="../images/logo.svg"/>
            <Navigation />
        </div>
    )
}

export default Header;