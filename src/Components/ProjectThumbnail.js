import React, {Component} from "react";

class ProjectThumbnail extends Component {
    render() {
        return (
            <img className="jna-component--project-thumbnail" alt={this.props.item.name} src={this.props.item.thumbnailUrl}/>
        );
    }
}

export default ProjectThumbnail;