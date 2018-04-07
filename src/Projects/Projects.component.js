import React, {Component} from "react";
import "./Projects.component.css";
import ProjectsService from "./Projects.service";
import AllTechnologies from "./AllTechnologies.component";
import ProjectItem from "./ProjectItem.component";

class Projects extends Component {
    componentWillMount() {
        ProjectsService.listen((state) => {
            this.setState({
                projects: state.projects,
                pagination: {
                    curItem: 0,
                    scrollSize: 2,
                    numVisible: 4
                }
            });
        });
    }

    movePage(delta) {
        let curItem = this.state.pagination.curItem + delta;

        if(curItem < 0) {
            curItem = 0;
        }
        else {
            let max = this.state.projects.length - this.state.pagination.numVisible;
            if (curItem > max) {
                curItem = max;
            }
        }

        this.setState(Object.assign({}, this.state, {
            pagination: Object.assign({}, this.state.pagination, {
                curItem: curItem
            })
        }));
    }

    getItems() {
        return this.state.projects.filter((project, index) => {
            return index >= this.state.pagination.curItem && index < this.state.pagination.curItem + this.state.pagination.numVisible;
        }).map((project) => {
            return (
                <li key={project.key} tabIndex="0" className="project-item-wrapper col-xs-6">
                    <ProjectItem project={project} />
                </li>
            );
        });
    }

    render() {
        return (
            <section className="section projects-wrapper">
                <div className="projects-inner row">
                    <div className="col-xs-12 col-md-7 projects-items-wrapper">
                        <button className="jna-icon-angle-double-up project-scroller" onClick={() => {
                            this.movePage(-this.state.pagination.scrollSize);
                        }} />

                        <ul className="col-xs-12">
                            {this.getItems()}
                        </ul>

                        <button className="jna-icon-angle-double-down project-scroller" onClick={() => {
                            this.movePage(this.state.pagination.scrollSize);
                        }} />
                    </div>
                    <div className="col-md-push-1 col-md-4">
                        <AllTechnologies/>
                    </div>
                </div>
            </section>
        );
    }
}

export default Projects;