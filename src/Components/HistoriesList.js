import React, {Component} from "react";

class HistoriesList extends Component {
    render() {
        return (
            <ul className="jna-component--history-list">{
                this.props.items.map((item, index) => {
                    return (
                        <li key={index} tabIndex="0">
                            <button onClick={(e) => {
                                e.preventDefault();
                                this.props.onActivateHistory(item);
                            }}>
                                <img className="jna-component--history-logo" src={item.thumbnailUrl} alt={item.jobTitle + " at " + item.name}/>
                            </button>
                        </li>
                    );
                })
            }</ul>
        );
    }
}

export default HistoriesList;