import React, {Component} from "react";
import AboutDescription from "./AboutDescription";
import AboutLink from "./AboutLink";
import AboutText from "./AboutText";

class About extends Component {
    getDescriptionItem() {
        if(this.props.item.url) {
            return (
                <AboutLink value={this.props.item.value} url={this.props.item.url} />
            );
        }

        return (
            <AboutText value={this.props.item.value} />
        );
    }

    render() {
        return (
            <p className={"jna-component--about-item " + this.props.item.className}>
                <AboutDescription value={this.props.item.key} />
                {this.getDescriptionItem()}
            </p>
        );
    }
}

export default About;