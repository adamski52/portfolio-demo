import React, {Component} from "react";
import "./ProjectItem.component.css";

class ProjectItem extends Component {
    render() {
        return (
            <div className="project-item">
                <img className="project-item-thumbnail" src={this.props.project.thumbnailUrl}/>
                <div className="project-item-footer">
                    <h3 className="project-item-name">{this.props.project.name}</h3>
                    <div className="project-item-actions">
                        <button className="jna-icon-heart project-item-btn project-item-hearts pull-left">{this.props.project.hearts}</button>
                        <button className="jna-icon-code-fork project-item-btn project-item-code pull-right">View code</button>
                        <button className="jna-icon-code project-item-btn project-item-live pull-right">View live</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectItem;