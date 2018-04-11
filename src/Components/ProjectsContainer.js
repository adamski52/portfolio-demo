import React, {Component} from "react";
import Project from "./Project";

class ProjectsContainer extends Component {
    render() {
        return (
            <div className="jna-container--projects">
                <ul className="col-xs-12">{
                    this.props.items.map((item) => {
                        return (
                            <li key={item.key} tabIndex="0" className="col-xs-6">
                                <Project item={item}/>
                            </li>
                        );
                    })
                }</ul>
            </div>
        );
    }
}

export default ProjectsContainer;