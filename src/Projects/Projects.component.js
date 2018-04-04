import React, {Component} from "react";
import "./Projects.component.css";
import ProjectsService from "./Projects.service";

class Projects extends Component {
    componentWillMount() {
        ProjectsService.subscribe(this);
        ProjectsService.get();
    }

    render() {
        return (
            <section className="section projects-wrapper">
                <div className="projets-inner">
                </div>
            </section>
        );
    }
}

export default Projects;