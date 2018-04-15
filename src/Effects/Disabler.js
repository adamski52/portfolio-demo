import React, {Component} from "react";

class Disabler extends Component {
    getClasses() {
        let classes = [
            "jna-effect--disabler"
        ];

        if(!this.props.enabled) {
            return "jna-effect--disabler-disabled";
        }

        return classes.join(" ");
    }

    render() {
        return (
            <div className={this.getClasses()}>{this.props.children}</div>
        );
    }
}

export default Disabler;
