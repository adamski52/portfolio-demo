import React, {Component} from "react";

class AboutText extends Component {
    render() {
        return (
            <span className="jna-component--about-item-text">{this.props.value}</span>
        );
    }
}

export default AboutText;