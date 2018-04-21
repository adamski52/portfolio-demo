import React, {Component} from "react";
import History from "./History";

class HistoriesContainer extends Component {
    getClasses(index) {
        if(index === 1) {
            return "col-xs-4 jna-component--history-item-major";
        }

        return "col-xs-4 jna-component--history-item-minor";
    }

    render() {
        return (
            <ul className="col-xs-12 jna-component--history-histories">{
                this.props.items.map((item, index) => {
                    return (
                        <li key={index} tabIndex="0" className={this.getClasses(index)}>
                            <History item={item}/>
                        </li>
                    );
                })
            }</ul>
        );
    }
}

export default HistoriesContainer;