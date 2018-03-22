import React, {Component} from "react";
import "./SkillItem.component.css";

class SkillItem extends Component {
    render() {
        return (
            <i className={"skill-item-icon " + this.props.item.className}/>
        );
    }
}

export default SkillItem;