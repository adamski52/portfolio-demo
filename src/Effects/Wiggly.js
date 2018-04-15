import React, {Component} from "react";

class Wiggly extends Component {
    shouldComponentUpdate() {
        return false;
    }

    constructor(props) {
        super(props);
        this.offsetClass = "jna-effect--wiggly-offset-" + Wiggly.getRandomOffset();
        this.durationClass = "jna-effect--wiggly-duration-" + Wiggly.getRandomDuration();
    }

    static getRandomDuration() {
        return Math.round(Math.random() * 3) + 1;
    }

    static getRandomOffset() {
        return Math.round(Math.random() * 39) + 1;
    }

    render() {
        return (
            <div className={"jna-effect--wiggly " + this.durationClass + " " + this.offsetClass}>{this.props.children}</div>
        );
    }
}

export default Wiggly;
