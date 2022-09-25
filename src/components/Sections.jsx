import React from "react";
import Title from "./Title";
import Para from "./Para";
import Form from "./Form";
import Card from "./Card";


function HeadTop() {
    return(
        <section className="top-section">
            
            <img className="illustration" src="../images/illustration-1.svg" alt="illustration-1"/>
            <div>
                
                <Title 
                    content="All your files in one secure location, accessible anywhere."
                />
                <Para 
                    content="Fylo stores your most important files in one secure location. 
                            Access them wherever you need, share and collaborate with friends, 
                            family, and co-workers."
                />
                <Form 
                    classname="form-one"
                    placeholder="Enter your email..."
                    btnName="Get Started"
                />
            </div>
        </section>
    )
}

function HeadMid() {
    return (
        <section className="mid-section">
            <img className="illustration" src="../images/illustration-2.svg" alt="illustration-2" />
            <div>
                <Title 
                    content="Stay productive, wherever you are"
                />
                <Para 
                    content="Never let location be an issue when accessing your files. Fylo has you 
                            covered for all of your file storage needs."
                />
                <Para 
                    content="Securely share files and folders with friends, family and colleagues for 
                            live collaboration. No email attachments required!"
                />
                <a href="#" className="btnexplore">See how Fylo works <img src="../images/icon-arrow.svg" alt="arrow" /></a>
                <Card />
            </div>
        </section>
    )
}

function HeadBottom() {
    return (
        <section className="bottom-section">
            <div className="call-to-action">
            <Title 
                content="Get early access today"
            />
            <Para 
                content="It only takes a minute to sign up and our free starter tier is extremely generous. 
                         If you have any questions, our support team would be happy to help you."
            />
            </div>
            <div>
                <Form 
                    classname="form-two"
                    placeholder="email@example.com"
                    btnName="Get Started For Free"
                />
            </div>
        </section>
    )
}

export {HeadTop, HeadMid, HeadBottom};