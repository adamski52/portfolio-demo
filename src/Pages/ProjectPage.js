import React, {Component} from "react";
import PaginationButton from "../Components/PaginationButton";
import ProjectsContainer from "../Components/ProjectsContainer";

class ProjectPage extends Component {
    render() {
        return (
            <section className="jna-page--project">
                <div className="col-xs-12 col-md-7">
                    <PaginationButton delta={-2}/>
                    <ProjectsContainer items={this.state.items}/>
                    <PaginationButton delta={2}/>
                </div>
            </section>
        );
    }
}

export default ProjectPage;