import {combineReducers} from "redux";
// import ProjectsReducer from "./ProjectsReducer";
// import SkillsReducer from "./SkillsReducer";
// import HistoryReducer from "./HistoryReducer";
// import ContactReducer from "./ContactReducer";
// import NavReducer from "./NavReducer";
import AboutHandler from "./AboutHandler";

class AppHandler {
    static reducer = combineReducers({
        // nav: NavReducer.reducer,
        about: AboutHandler.reducer,
        // skills: SkillsReducer.reducer,
        // projects: ProjectsReducer.reducer,
        // history: HistoryReducer.reducer,
        // contact: ContactReducer.reducer
    });
}

export default AppHandler;