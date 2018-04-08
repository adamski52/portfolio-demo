import React, {Component} from "react";
import About from "../Components/AboutItem";
class AboutContainer extends Component {
    render() {
        return (
            <ul className="row jna-container--abouts">{
                this.props.items.map((item) => {
                    return (
                        <li key={item.key} className="col-xs-12 col-sm-12 col-md-4">
                            <About item={item}/>
                        </li>
                    );
                })
            }</ul>
        );
    }
}

export default AboutContainer;