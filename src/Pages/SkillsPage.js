import React, {Component} from "react";
import SkillsContainer from "../Containers/SkillsContainer";

class SkillsPage extends Component {
    render() {
        return (
            <section className="jna-page--skills">
                <SkillsContainer items={this.state.items} />
            }</section>
        );
    }
}

export default SkillsPage;