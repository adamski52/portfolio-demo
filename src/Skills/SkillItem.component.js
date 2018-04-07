import React, {Component} from "react";
import "./SkillItem.component.css";

class SkillItem extends Component {
    tickRate = 5;
    gap = 75;

    constructor(props) {
        super(props);
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);

        this.state = {
            value: 0
        };
    }

    getRandomDepth() {
        return Math.round(Math.random() * 4) + 1;
    }

    getClassNames() {
        let classes = [
            "skill-item-icon",
            "skill-item-indicator-" + this.state.value,
            this.props.skill.className,
            "depth-" + this.getRandomDepth()
        ];
        return classes.join(" ");
    }

    onMouseLeave() {
        clearInterval(this.ticker);
        this.ticker = setInterval(() => {
            this.onTick(-1);
        }, this.tickRate);
    }

    onMouseEnter() {
        clearInterval(this.ticker);
        this.ticker = setInterval(() => {
            this.onTick(1);
        }, this.tickRate);
    }

    onTick(delta) {
        if(delta === 0) {
            clearInterval(this.ticker);
            return;
        }

        if(delta > 0 && this.state.value >= this.props.skill.proficiency) {
            clearInterval(this.ticker);
            return;
        }

        if(delta < 0 && this.state.value <= 0) {
            clearInterval(this.ticker);
            return;
        }

        this.setState({
            value: this.state.value + delta
        });
    }

    render() {
        return (
            <div onMouseLeave={this.onMouseLeave} onMouseEnter={this.onMouseEnter} className={this.getClassNames()}>
                <div className="skill-item-gauge">
                    <div className="skill-item-gauge-indicator"/>
                </div>
                <div className="skill-item-talent">{this.props.skill.key}</div>
            </div>
        );
    }
}

export default SkillItem;