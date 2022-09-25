import React from "react";
import Header from "./Header";
import Footer from "./Footer.jsx";
import { HeadTop, HeadMid, HeadBottom } from "./Sections.jsx";

function App(){
    return (
        <div>
            <Header />
            <HeadTop />
            <HeadMid />
            <HeadBottom />
            <Footer />
        </div>
    );
}

export default App;