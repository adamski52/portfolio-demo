import {combineReducers} from "redux";
import ProjectsHandler from "./ProjectsHandler";
import AboutHandler from "./AboutHandler";
import SkillsHandler from "./SkillsHandler";

class AppHandler {
    static reducer = combineReducers({
        // nav: NavReducer.reducer,
        about: AboutHandler.reducer,
        skills: SkillsHandler.reducer,
        projects: ProjectsHandler.reducer
        // history: HistoryReducer.reducer,
        // contact: ContactReducer.reducer
    });
}

export default AppHandler;