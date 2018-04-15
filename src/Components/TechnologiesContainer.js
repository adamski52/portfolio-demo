import React, {Component} from "react";
import Technology from "./Technology";
import Positioned from "../Effects/Positioned";
import Wiggly from "../Effects/Wiggly";
import {connect} from "react-redux";
import Disabler from "../Effects/Disabler";

class TechnologiesContainer extends Component {
    isEnabled(skill) {
        if(!this.props.activeProject) {
            return false;
        }

        let skillName = skill.key.toLowerCase(),
            techName;

        return this.props.activeProject.technologies.find((tech) => {
            techName = tech.toLowerCase();

            return skillName.indexOf(techName) > -1;
        });
    }

    render() {
        return (
            <div className="jna-container--technologies">{
                this.props.skills.map((skill) => {
                    let isEnabled = this.isEnabled(skill);

                    return (
                        <Disabler key={skill.key} enabled={isEnabled} children={
                            <Positioned children={
                                <Wiggly children={
                                    <Technology item={skill}/>
                                }/>
                            }/>
                        }/>
                    );
                })
            }</div>
        );
    }
}

export default connect(
    (state) => {
        return {
            activeProject: state.activeProject.activeProject
        };
    }
)(TechnologiesContainer);
