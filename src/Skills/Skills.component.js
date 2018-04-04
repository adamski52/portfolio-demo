import React, {Component} from "react";
import "./Skills.component.css";
import SkillsService from "./Skills.service";
import SkillItem from "./SkillItem.component";

class Skills extends Component {

    gap = 75;

    componentWillMount() {
        SkillsService.subscribe(this);
        SkillsService.get();
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
        return {
            top: Math.round(Math.random() * (window.innerHeight - (this.gap * 2))),
            left: Math.round(Math.random() * (window.innerWidth - (this.gap * 2))),
            position: "absolute"
        };
    }

    getItems() {
        return this.state.skills.map((item) => {
            return (
                <li key={item.key} tabIndex="0" style={this.getRandomPosition()} className={this.getClassNames()}>
                    <SkillItem item={item} />
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