import React, {Component} from "react";
import Technology from "./Technology";
import Gauge from "./Gauge";

class Skill extends Component {
    render() {
        return (
            <li className="jna-component--skill">
                <Technology item={this.props.item} children={
                    <Gauge tickRate={5} max={this.props.item.proficiency}/>
                }/>
            </li>
        );
    }
}

export default Skill;
