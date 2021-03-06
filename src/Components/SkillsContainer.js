import React, {Component} from "react";
import Skill from "./Skill";
import Positioned from "../Effects/Positioned";
import Wiggly from "../Effects/Wiggly";

class SkillsContainer extends Component {
    render() {
        return (
            <ul className="jna-container--skills">{
                this.props.items.map((item) => {
                    return (
                        <Positioned key={item.key} children={
                            <Wiggly children={
                                <Skill item={item}/>
                            }/>
                        }/>
                    );
                })
            }</ul>
        );
    }
}

export default SkillsContainer;