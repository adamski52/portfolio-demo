import React, {Component} from "react";
import {connect} from "react-redux"
import HistoriesHandler from "../Handlers/HistoriesHandler";
import HistoriesList from "../Components/HistoriesList";
import History from "../Components/History";

class HistoriesPage extends Component {
    constructor(props) {
        super(props);
        this.props.fetch();
    }

    render() {
        return (
            <section className="row jna-page--history">
                <div className="col-xs-4">
                    <HistoriesList items={this.props.items} onActivateHistory={this.props.onActivateHistory}/>
                </div>
                <div className="col-xs-8">
                    <History item={this.props.activeItem}/>
                </div>
            </section>
        );
    }
}

export default connect(
    (state) => {
        return {
            items: state.history.histories,
            activeItem: state.history.activeItem
        }
    },
    (dispatch) => {
        return {
            fetch: () => {
                dispatch(HistoriesHandler.fetch());
            },
            onActivateHistory: (item) => {
                dispatch(HistoriesHandler.onActivateHistory(item));
            }
        };
    }
)(HistoriesPage);