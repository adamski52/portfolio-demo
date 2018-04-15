import React, {Component} from "react";

class Positioned extends Component {
    shouldComponentUpdate() {
        return false;
    }

    static getRandomPosition() {
        let top = Math.round(Math.random() * 100),
            left = Math.round(Math.random() * 100);

        return {
            top: top + "%",
            left: left + "%"
        };
    }

    render() {
        return (
            <div style={Positioned.getRandomPosition()} className="jna-effect--positioned">{this.props.children}</div>
        );
    }
}

export default Positioned;
