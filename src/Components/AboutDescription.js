import React, {Component} from "react";

class AboutDescription extends Component {
    render() {
        return (
            <span className="jna-component--about-description">{this.props.value}</span>
        );
    }
}

export default AboutDescription;