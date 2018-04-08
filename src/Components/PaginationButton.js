import React, {Component} from "react";

class PaginationButton extends Component {
    constructor(props) {
        super(props);
        this.iconClass = this.props.delta > 0 ? "jna-icons-double-down" : "jna-icons-double-up";
    }

    static onClick(e) {
        e.preventDefault();
        console.log("delta: ", this.props.delta);
    }

    render() {
        return (
            <button className={this.iconClass + " jna-component--pagination-button"} onClick={PaginationButton.onClick} />
        );
    }
}

export default PaginationButton;