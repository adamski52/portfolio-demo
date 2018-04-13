import React, {Component} from "react";

class AboutLink extends Component {
    render() {
        return (
            <a className="jna-component--about-link" href={this.props.url}>{this.props.value}</a>
        );
    }
}

export default AboutLink;