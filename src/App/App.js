import React, {Component} from "react";
import "./App.css";
import About from "../About/About.component";
import Skills from "../Skills/Skills.component";
import Projects from "../Projects/Projects.component";
import SkillsService from "../Skills/Skills.service";
import ProjectsService from "../Projects/Projects.service";
import AboutService from "../About/About.service";

class App extends Component {
    componentWillMount() {
        SkillsService.get();
        ProjectsService.get();
        AboutService.get();
    }

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
