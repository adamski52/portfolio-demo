import React, {Component} from "react";
import "./SkillItem.component.css";

class SkillItem extends Component {
    tickRate = 5;

    constructor(props) {
        super(props);
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);

        this.state = {
            value: 0
        };
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

        if(delta > 0 && this.state.value >= this.props.item.skill) {
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
            <div onMouseLeave={this.onMouseLeave} onMouseEnter={this.onMouseEnter} className={"skill-item-icon skill-item-indicator-" + this.state.value + " " + this.props.item.className}>
                <div className="skill-item-gauge">
                    <div className="skill-item-gauge-indicator"/>
                </div>
            </div>
        );
    }
}

export default SkillItem;