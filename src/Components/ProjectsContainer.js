import React, {Component} from "react";
import Project from "./Project";

class ProjectsContainer extends Component {
    render() {
        return (
            <ul className="col-xs-12 jna-component--projects-projects">{
                this.props.items.map((item) => {
                    return (
                        <li key={item.key} tabIndex="0" className="col-xs-12 col-sm-6">
                            <Project item={item}/>
                        </li>
                    );
                })
            }</ul>
        );
    }
}

export default ProjectsContainer;