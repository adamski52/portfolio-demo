import React, {Component} from "react";
import "./App.css";
import About from "../About/About.component";
import Skills from "../Skills/Skills.component";

class App extends Component {
    render() {
        return (
            <div className="container-fluid app-wrapper">
                <About />
                <Skills />
            </div>
        );
    }
}

export default App;
