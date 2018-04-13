import React, {Component} from "react";

class AboutText extends Component {
    render() {
        return (
            <span className="jna-component--about-text">{this.props.value}</span>
        );
    }
}

export default AboutText;