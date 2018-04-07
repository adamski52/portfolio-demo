import React, {Component} from "react";
import "./AllTechnologies.component.css";
import "../Skills/Skills.service";
import SkillsService from "../Skills/Skills.service";

class AllTechnologies extends Component {
    componentWillMount() {
        SkillsService.subscribe(this);
    }

    render() {
        return (
            <section className="all-technologies-wrapper"/>
        );
    }
}

export default AllTechnologies;