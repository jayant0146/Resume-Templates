import React from "react";
import About from "./About";
import Certification from "./Certification";
import Contact from "./Contact";
import Education from "./Education";
import Language from "./Language";
import Projects from "./Projects";
import Skills from "./Skills";
import "./style.css";

function Template() {
    return (<div className="template">
        <About /> <br />
        <Contact /><br /><br /><hr />
        <Education /><br /><br /><hr />
        <Projects /><br /><br /><hr />
        <Skills /><br />
        <Language /><br /><br /><hr />
        <Certification />
    </div>)
}

export default Template;