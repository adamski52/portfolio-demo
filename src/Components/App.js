import React, {Component} from "react";
import AboutPage from "../Pages/AboutPage";
import ProjectsPage from "../Pages/ProjectsPage";
import SkillsPage from "../Pages/SkillsPage";
import HistoriesPage from "../Pages/HistoriesPage";

class App extends Component {
    render() {
        return (
            <div className="container-fluid jna-app">
                <AboutPage/>
                <SkillsPage/>
                <ProjectsPage/>
                <HistoriesPage/>
            </div>
        );
    }
}

export default App;
