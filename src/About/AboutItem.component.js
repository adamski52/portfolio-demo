import React, {Component} from "react";
import "./AboutItem.component.css";

class AboutItem extends Component {
    getContent() {
        return (
            this.props.item.url ? <a className="about-item-text about-item-link" href={this.props.item.url}>{this.props.item.value}</a> : <span className="about-item-text">{this.props.item.value}</span>
        );
    }

    render() {
        return (
            <p className={"about-item-content " + this.props.item.className}>
                <span className="about-item-description">{this.props.item.key}</span>
                {this.getContent()}
            </p>
        );
    }
}

export default AboutItem;