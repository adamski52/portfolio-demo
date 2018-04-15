class ActiveProjectHandler {
    static ACTIVATE_PROJECT = "PROJECTS_ACTIVATE_PROJECT";
    static DEACTIVATE_PROJECT = "PROJECTS_DEACTIVATE_PROJECT";

    static INITIAL_STATE = {
        activeProject: undefined
    };

    static reducer(state = ActiveProjectHandler.INITIAL_STATE, action) {
        switch(action.type) {
            case ActiveProjectHandler.ACTIVATE_PROJECT:
                return Object.assign({}, state, {
                    activeProject: action.project
                });

            case ActiveProjectHandler.DEACTIVATE_PROJECT:
                return Object.assign({}, state, {
                    activeProject: undefined
                });

            default:
                return state;
        }
    }

    static onActivateProject(project) {
        return {
            type: ActiveProjectHandler.ACTIVATE_PROJECT,
            project: project
        };
    }

    static onDeactivateProject() {
        return {
            type: ActiveProjectHandler.DEACTIVATE_PROJECT
        };
    }
}

export default ActiveProjectHandler;