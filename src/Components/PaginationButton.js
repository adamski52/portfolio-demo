import React, {Component} from "react";

class PaginationButton extends Component {
    constructor(props) {
        super(props);
        this.iconClass = this.props.delta > 0 ? "jna-icon-angle-double-down" : "jna-icon-angle-double-up";
    }

    render() {
        return (
            <button className={this.iconClass + " jna-component--pagination-button"} onClick={(e) => {
                this.props.onChangePage(this.props.delta);
            }} />
        );
    }
}

export default PaginationButton;