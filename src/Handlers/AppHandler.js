import {combineReducers} from "redux";
import ProjectsHandler from "./ProjectsHandler";
import AboutHandler from "./AboutHandler";
import SkillsHandler from "./SkillsHandler";
import ActiveProjectHandler from "./ActiveProjectHandler";
import HistoriesHandler from "./HistoriesHandler";

class AppHandler {
    static reducer = combineReducers({
        // nav: NavReducer.reducer,
        about: AboutHandler.reducer,
        skills: SkillsHandler.reducer,
        projects: ProjectsHandler.reducer,
        activeProject: ActiveProjectHandler.reducer,
        history: HistoriesHandler.reducer,
        // contact: ContactReducer.reducer
    });
}

export default AppHandler;