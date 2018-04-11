import React, {Component} from "react";
import SkillsContainer from "../Components/SkillsContainer";
import {connect} from "react-redux";
import SkillsHandler from "../Handlers/SkillsHandler";

class SkillsPage extends Component {
    constructor(props) {
        super(props);
        this.props.fetch();
    }

    render() {
        return (
            <section className="jna-page--skills">
                <SkillsContainer items={this.props.items}/>
            </section>
        );
    }
}

export default connect(
    (state) => {
        return {
            items: state.skills.skills
        };
    },
    (dispatch) => {
        return {
            fetch: () => {
                dispatch(SkillsHandler.fetch());
            }
        };
    }
)(SkillsPage);