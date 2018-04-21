import React, {Component} from "react";
import {connect} from "react-redux"
import HistoriesContainer from "../Components/HistoriesContainer";
import HistoriesHandler from "../Handlers/HistoriesHandler";

class HistoriesPage extends Component {
    constructor(props) {
        super(props);
        this.props.fetch();
    }

    render() {
        return (
            <section className="jna-page--history">
                <HistoriesContainer items={this.props.items}/>
            </section>
        );
    }
}

export default connect(
    (state) => {
        return {
            items: state.history.histories
        }
    },
    (dispatch) => {
        return {
            fetch: () => {
                dispatch(HistoriesHandler.fetch());
            }
        };
    }
)(HistoriesPage);