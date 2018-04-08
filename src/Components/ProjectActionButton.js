import React, {Component} from "react";

class ProjectActionButton extends Component {
    render() {
        return (
            <button className={"jna-component--project-action-button jna-icons-" + this.props.icon + " " + this.props.theme}>{this.props.value}</button>
        );
    }
}

export default ProjectActionButton;