import React, {Component} from "react";
import "./Skills.component.css";
import SkillsService from "./Skills.service";
import SkillItem from "./SkillItem.component";

class Skills extends Component {

    gap = 75;

    componentWillMount() {
        SkillsService.subscribe(this);
    }

    getRandomDuration() {
        return Math.round(Math.random() * 3) + 1;
    }

    getRandomOffset() {
        return Math.round(Math.random() * 39) + 1;
    }

    getClassNames() {
        let classes = [
            "skill-item",
            "wiggle",
            "offset-" + this.getRandomOffset(),
            "duration-" + this.getRandomDuration()
        ];
        return classes.join(" ");
    }

    getRandomPosition() {
        let top = Math.round(Math.random() * 100),
            left = Math.round(Math.random() * 100);

        return {
            top: top + "%",
            left: left + "%",
            position: "absolute"
        };
    }

    getItems() {
        return this.state.skills.map((skill) => {
            return (
                <li key={skill.key} tabIndex="0" style={this.getRandomPosition()} className={this.getClassNames()}>
                    <SkillItem skill={skill} />
                </li>
            );
        });
    }

    render() {
        return (
            <section className="section skills-wrapper">
                <div className="skills-inner">
                    <ul>{this.getItems()}</ul>
                </div>
            </section>
        );
    }
}

export default Skills;