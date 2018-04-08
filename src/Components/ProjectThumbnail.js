import React, {Component} from "react";

class ProjectThumbnail extends Component {
    render() {
        return (
            <img className="jna-component--project-thumbnail" src={this.props.project.thumbnailUrl}/>
        );
    }
}

export default ProjectThumbnail;