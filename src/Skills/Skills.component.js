import React, {Component} from "react";
import "./Skills.component.css";
import SkillsService from "./Skills.service";
import SkillItem from "./SkillItem.component";
import SkillItemGauge from "./SkillItemGauge.component";

class Skills extends Component {
    componentWillMount() {
        SkillsService.subscribe(this);
        SkillsService.get();
    }

    getItems() {
        console.log("state", this.state);
        let items = this.state.skills.map((item) => {
            return (
                <li key={item.key} tabIndex="0" className="skill-item">
                    <SkillItemGauge item={item}/>
                    <SkillItem item={item}/>
                </li>
            );
        });

        console.log("items", items);

        return items;
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