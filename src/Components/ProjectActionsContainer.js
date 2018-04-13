import React, {Component} from "react";
import ProjectActionButton from "./ProjectActionButton";

class ProjectActionsContainer extends Component {
    render() {
        return (
            <div className="jna-container--projects-actions">
                {this.props.children}
                <ProjectActionButton theme="jna-theme--hearts" icon="jna-icon-heart" value={this.props.item.hearts} />
                <ProjectActionButton theme="jna-theme--view-live" icon="jna-icon-code" value="View Live" />
                <ProjectActionButton theme="jna-theme--view-code" icon="jna-icon-code-fork" value="View Code" />
            </div>
        );
    }
}

export default ProjectActionsContainer;