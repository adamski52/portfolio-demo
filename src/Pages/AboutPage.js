import React, {Component} from "react";
import Heading from "../Components/Heading";

class AboutPage extends Component {
    render() {
        return (
            <section className="jna-page--about">
                <Heading value="Jonathan Adamski"/>
                <div className="col-xs-8 col-xs-push-2 col-sm-6 col-sm-push-3 col-md-12 col-md-push-0 col-lg-8 col-lg-push-2">
                    <AboutItemContainer items={this.state["geographical"]} />
                    <AboutItemContainer items={this.state["professional"]} />
                    <AboutItemContainer items={this.state["social"]} />
                </div>
            </section>
        );
    }
}

export default AboutPage;