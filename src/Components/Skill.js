import React, {Component} from "react";
import Technology from "./Technology";

class Skill extends Component {
    render() {
        return (
            <li className="jna-component--skill">{
                this.state.skills.map((skill) => {
                    return (
                        <Technology item={skill}/>
                    );
                })
            }</li>
        );
    }
}

export default Skill;
