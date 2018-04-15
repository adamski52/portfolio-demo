import React, {Component} from "react";
import PaginationButton from "../Components/PaginationButton";
import ProjectsContainer from "../Components/ProjectsContainer";
import {connect} from "react-redux";
import ProjectsHandler from "../Handlers/ProjectsHandler";
import TechnologiesContainer from "../Components/TechnologiesContainer";
import ActiveProjectHandler from "../Handlers/ActiveProjectHandler";

class ProjectsPage extends Component {
    constructor(props) {
        super(props);
        this.props.fetch();
    }

    render() {
        return (
            <section className="jna-page--projects">
                <div className="jna-component--projects col-xs-12 col-md-7">
                    <PaginationButton delta={-ProjectsHandler.scrollSize} onChangePage={this.props.onChangePage}/>
                    <ProjectsContainer onProjectDeactivate={this.props.onProjectDeactivate} onProjectActivate={this.props.onProjectActivate} items={this.props.items}/>
                    <PaginationButton delta={ProjectsHandler.scrollSize} onChangePage={this.props.onChangePage}/>
                </div>
                <div className="jna-component--projects-technologies">
                    <TechnologiesContainer skills={this.props.skills}/>
                </div>
            </section>
        );
    }
}

export default connect(
    (state) => {
        return {
            items: state.projects.projects,
            skills: state.skills.skills
        };
    },
    (dispatch) => {
        return {
            fetch: () => {
                dispatch(ProjectsHandler.fetch());
            },
            onProjectActivate: (project) => {
                dispatch(ActiveProjectHandler.onActivateProject(project));
            },
            onProjectDeactivate: () => {
                dispatch(ActiveProjectHandler.onDeactivateProject());
            },
            onChangePage: (delta) => {
                dispatch(ProjectsHandler.onChangePage(delta));
            }
        };
    }
)(ProjectsPage);