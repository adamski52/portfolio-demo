import React, {Component} from "react";
import PaginationButton from "../Components/PaginationButton";
import ProjectsContainer from "../Components/ProjectsContainer";
import {connect} from "react-redux";
import ProjectsHandler from "../Handlers/ProjectsHandler";

class ProjectsPage extends Component {
    constructor(props) {
        super(props);
        this.props.fetch();
    }

    render() {
        return (
            <section className="jna-page--projects">
                <div className="col-xs-12 col-md-7">
                    <PaginationButton delta={-ProjectsHandler.scrollSize} onChangePage={this.props.onChangePage}/>
                    <ProjectsContainer items={this.props.items}/>
                    <PaginationButton delta={ProjectsHandler.scrollSize} onChangePage={this.props.onChangePage}/>
                </div>
            </section>
        );
    }
}

export default connect(
    (state) => {
        return {
            items: state.projects.projects
        };
    },
    (dispatch) => {
        return {
            fetch: () => {
                dispatch(ProjectsHandler.fetch());
            },
            onChangePage: (delta) => {
                dispatch(ProjectsHandler.onChangePage(delta));
            }
        };
    }
)(ProjectsPage);