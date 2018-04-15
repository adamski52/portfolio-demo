import React, {Component} from "react";
import ProjectThumbnail from "./ProjectThumbnail";
import ProjectTitle from "./ProjectTitle";
import ProjectActionsContainer from "./ProjectActionsContainer";

class Project extends Component {
    render() {
        return (
            <div className="jna-component--projects-project"
                 onMouseEnter={() => {
                    this.props.onProjectActivate(this.props.item);
                }}
                onMouseLeave = {() => {
                    this.props.onProjectDeactivate();
                }}>
                <ProjectThumbnail item={this.props.item} />
                <ProjectActionsContainer item={this.props.item} children={
                    <ProjectTitle item={this.props.item} />
                }/>
            </div>
        );
    }
}

export default Project;