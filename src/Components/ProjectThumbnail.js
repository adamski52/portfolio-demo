import React, {Component} from "react";

class ProjectThumbnail extends Component {
    constructor(props) {
        super(props);

        this.style = {
            backgroundImage: "url(" + this.props.item.thumbnailUrl + ")"
        };
    }

    render() {
        return (
            <div className="jna-component--projects-thumbnail" style={this.style} />
        );
    }
}

export default ProjectThumbnail;