import React, {Component} from "react";

class PaginationButton extends Component {
    constructor(props) {
        super(props);
        this.iconClass = this.props.delta > 0 ? "jna-icons-double-down" : "jna-icons-double-up";
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