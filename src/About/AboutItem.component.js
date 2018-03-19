import React, {Component} from "react";
import "./AboutItem.component.css";

class AboutItem extends Component {
    getContent() {
        return (
            this.props.item.url ? <a className="about-item-link" href={this.props.item.url}>{this.props.item.value}</a> : <span className="about-item-text">{this.props.item.value}</span>
        );
    }

    render() {
        return (
            <p class="about-item-content">
                <i className={this.props.item.className}></i>
                <span className="sr-only">{this.props.item.name}:</span>
                {this.getContent()}
            </p>
        );
    }
}

export default AboutItem;