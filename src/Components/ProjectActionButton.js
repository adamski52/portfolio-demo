import React, {Component} from "react";

class ProjectActionButton extends Component {
    render() {
        return (
            <button className={"jna-component--projects-actions-button " + (this.props.theme || "") + " " + (this.props.icon || "")}>{this.props.value}</button>
        );
    }
}

export default ProjectActionButton;