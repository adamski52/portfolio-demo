import React, {Component} from "react";
import Gauge from "./Gauge";

class Technology extends Component {
    render() {
        return (
            <div className={"jna-component--technology " + this.props.item.className}>
                <Gauge tickRate={5} max={this.props.item.proficiency}/>
            </div>
        );
    }
}

export default Technology;