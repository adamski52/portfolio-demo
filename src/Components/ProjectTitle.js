import React, {Component} from "react";

class ProjectTitle extends Component {
    render() {
        return (
            <h3 className="jna-component--project-title">{this.props.item.name}</h3>
        );
    }
}

export default ProjectTitle;