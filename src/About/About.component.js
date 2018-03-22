import React, {Component} from "react";
import "./About.component.css";
import AboutItem from "./AboutItem.component";
import AboutService from "./About.service";

class About extends Component {
    componentWillMount() {
        AboutService.subscribe(this);
        AboutService.get();
    }

    makeSection(name) {
        return this.state[name].map((item) => {
            return (
                <li key={item.key} className="col-md-4 col-md-push-0 col-xs-8 col-xs-push-2">
                    <AboutItem item={item} />
                </li>
            );
        });
    }

    render() {
        return (
            <section className="section about-wrapper">
                <div className="about-inner">
                    <h1 className="decorative">Jonathan Adamski</h1>
                    <ul className="row">{this.makeSection("geographical")}</ul>
                    <ul className="row">{this.makeSection("professional")}</ul>
                    <ul className="row">{this.makeSection("social")}</ul>
                </div>
            </section>
        );
    }
}

export default About;