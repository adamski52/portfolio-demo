import React, {Component} from "react";
import "./App.css";
import About from "../About/About.component";
import Skills from "../Skills/Skills.component";
import Projects from "../Projects/Projects.component";

class App extends Component {
    render() {
        return (
            <div className="container-fluid app-wrapper">
                <About />
                <Skills />
                <Projects/>
            </div>
        );
    }
}

export default App;
