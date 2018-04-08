import React, {Component} from "react";

class Heading extends Component {
    render() {
        return (
            <h1 className="jna-component--heading">{this.props.value}</h1>
        );
    }
}

export default Heading;