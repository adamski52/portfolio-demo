import React, {Component} from "react";

class Technology extends Component {
    render() {
        return (
            <div className={"jna-component--technology " + this.props.item.className}>
                {this.props.children}
            </div>
        );
    }
}

export default Technology;