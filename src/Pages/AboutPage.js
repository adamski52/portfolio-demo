import React, {Component} from "react";
import {connect} from "react-redux"
import Heading from "../Components/Heading";
import AboutCategory from "../Components/AboutCategory";
import AboutHandler from "../Handlers/AboutHandler";

class AboutPage extends Component {
    constructor(props) {
        super(props);
        this.props.fetch();
    }

    render() {
        return (
            <section className="jna-page--about">
                <Heading value="Jonathan Adamski"/>
                <div className="col-xs-8 col-xs-push-2 col-sm-6 col-sm-push-3 col-md-12 col-md-push-0 col-lg-8 col-lg-push-2">
                    <AboutCategory items={this.props.geographical} />
                    <AboutCategory items={this.props.professional} />
                    <AboutCategory items={this.props.social} />
                </div>
            </section>
        );
    }

    static mapStateToProps(state) {
        return {
            geographical: state.about.geographical,
            professional: state.about.professional,
            social: state.about.social
        };
    }

    static mapDispatchToProps(dispatch) {
        return {
            fetch: () => {
                 dispatch(AboutHandler.fetch());
            }
        };
    }
}

export default connect(
    AboutPage.mapStateToProps,
    AboutPage.mapDispatchToProps
)(AboutPage);