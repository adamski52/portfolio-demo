import React, {Component} from "react";
import ProjectThumbnail from "./ProjectThumbnail";
import ProjectTitle from "./ProjectTitle";
import ProjectActionsContainer from "../Containers/ProjectActionsContainer";

class Project extends Component {
    render() {
        return (
            <div className="jna-component--project">
                <ProjectThumbnail item={this.props.item} />
                <ProjectTitle item={this.props.item} />
                <ProjectActionsContainer item={this.props.item} />
            </div>
        );
    }
}

export default Project;