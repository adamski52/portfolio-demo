import React, {Component} from "react";
import "./SkillItemGauge.component.css";

class SkillItemGauge extends Component {
    render() {
        return (
            <div className="skill-item-gauge gauge-wrap">
                <div className="gauge-wrap-before"/>
                <div className="gauge-core">
                    <div className="gauge-bg"/>
                    <div className="gauge-active-wrap">
                        <div className="gauge-active"/>
                        <div className="gauge-active-before"/>
                    </div>
                    <div className="gauge-cap"/>
                </div>
                <div className="gauge-wrap-after"/>
            </div>
        );
    }
}

export default SkillItemGauge;
