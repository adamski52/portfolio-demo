import React, {Component} from "react";

class AboutDescription extends Component {
    render() {
        return (
            <span className="jna-component--about-item-description">{this.props.value}</span>
        );
    }
}

export default AboutDescription;