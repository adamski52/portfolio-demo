import React, {Component} from "react";

class History extends Component {
    getStyle() {
        return {
            backgroundImage: "url(" + this.props.item.thumbnailUrl + ")"
        };
    }

    render() {
        console.log("item??", this.props.item);
        if(!this.props.item.hasOwnProperty("name")) {
            return (
                <div className="jna-component--history-history-placeholder"/>
            );
        }

        return (
            <div className="jna-component--history-history">
                <img className="jna-component--history-logo" src={this.props.item.thumbnailUrl} alt={this.props.item.jobTitle + " at " + this.props.item.name}/>
                <div className="jna-component--history-dates">
                    <span className="jna-component--history-start-date">{this.props.item.startDate}</span>
                    <span className="jna-component--history-end-date">{this.props.item.endDate}</span>
                </div>
                <div className="col-xs-12">
                    <h2 className="jna-component--history-name"><span className="jna-component--history-field">Employer:</span> {this.props.item.name}</h2>
                    <h3 className="jna-component--history-title"><span className="jna-component--history-field">Job Title:</span> {this.props.item.jobTitle}</h3>
                </div>
                <ul className="col-sm-12 jna-component--history-description">{
                    this.props.item.description.map((description, index) => {
                        return (
                            <li key={index}>{description}</li>
                        );
                    })
                }</ul>
                <ul className="col-xs-12 jna-component--history-related">{
                    this.props.item.related.map((related, index) => {
                        return (
                            <li key={index}><img src={related.url} alt={related.description} /></li>
                        );
                    })
                }</ul>
            </div>
        );
    }
}

export default History;