import React, {Component} from "react";
import ProjectActionButton from "../Components/ProjectActionButton";

class ProjectActionsContainer extends Component {
    render() {
        return (
            <div className="jna-container--project-actions">
                <ProjectActionButton icon="heart" theme="jna-theme--hearts" value={this.props.project.hearts} />
                <ProjectActionButton icon="code" theme="jna-theme--view-live" value="View Live" />
                <ProjectActionButton icon="code-fork" theme="jna-theme--view-code" value="View Code" />
            </div>
        );
    }
}

export default ProjectActionsContainer;