import fetch from "cross-fetch";

class ProjectsHandler {
    static FETCH_BEGIN = "PROJECTS_FETCH_BEGIN";
    static FETCH_SUCCESS = "PROJECTS_FETCH_SUCCESS";
    static FETCH_ERROR = "PROJECTS_FETCH_ERROR";
    static PAGE_CHANGE = "PROJECTS_PAGE_CHANGE";

    static allProjects = [];
    static numVisible = 4;
    static scrollSize = 2;
    static curItem = 0;

    static INITIAL_STATE = {
        projects: []
    };

    static getPaginatedProjects() {
        return ProjectsHandler.allProjects.filter((item, index) => {
            return index >= ProjectsHandler.curItem && index < ProjectsHandler.curItem + ProjectsHandler.numVisible;
        });
    }

    static reducer(state = ProjectsHandler.INITIAL_STATE, action) {
        switch(action.type) {
            case ProjectsHandler.FETCH_SUCCESS:
                ProjectsHandler.allProjects = action.data;

                return Object.assign({}, state, {
                    projects: ProjectsHandler.getPaginatedProjects()
                });

            case ProjectsHandler.PAGE_CHANGE:
                ProjectsHandler.curItem = ProjectsHandler.curItem + action.delta;
                if(ProjectsHandler.curItem < 0) {
                    ProjectsHandler.curItem = 0;
                }
                else {
                    let max = ProjectsHandler.allProjects.length - ProjectsHandler.numVisible;
                    if (ProjectsHandler.curItem > max) {
                        ProjectsHandler.curItem = max;
                    }
                }

                return Object.assign({}, state, {
                    projects: ProjectsHandler.getPaginatedProjects()
                });

            default:
                return state;
        }
    }

    static fetch() {
        return (dispatch) => {
            dispatch(ProjectsHandler.onFetchBegin());

            setTimeout(() => {
                dispatch(ProjectsHandler.onFetchSuccess(ProjectsHandler.MOCK));
            }, 750);
            // return fetch("/api/projects").then((response) => {
            //     return response.json();
            // }).then((json) => {
            //     dispatch(ProjectsHandler.onFetchSuccess(json));
            // }).catch((error) => {
            //     dispatch(ProjectsHandler.onFetchError(error));
            // });
        };
    }

    static onChangePage(delta) {
        return {
            type: ProjectsHandler.PAGE_CHANGE,
            delta: delta
        };
    }

    static onFetchBegin() {
        return {
            type: ProjectsHandler.FETCH_BEGIN
        };
    }

    static onFetchSuccess(data) {
        return {
            type: ProjectsHandler.FETCH_SUCCESS,
            data: data
        };
    };

    static onFetchError(error) {
        return {
            type: ProjectsHandler.FETCH_ERROR,
            error: error
        };
    };

    static MOCK = [{
        key: "project-1",
        name: "Project 1",
        technologies: [
            "JavaScript",
            "Photoshop",
            "Illustrator",
            "HTML",
            "SCSS",
            "NPM",
            "React",
            "Python",
            "Django",
            "Git",
            "Github",
            "AWS"
        ],
        repoUrl: "http://www.github.com/adamski52/repos/whatever",
        liveUrl: "http://www.jonathanadamski.com/whatever",
        thumbnailUrl: "https://raw.githubusercontent.com/adamski52/timeline-portfolio/master/thumbnail.jpg",
        hearts: 1234
    }, {
        key: "project-2",
        name: "Project 2",
        technologies: [
            "JavaScript",
            "Photoshop",
            "Illustrator",
            "HTML",
            "SCSS",
            "NPM",
            "React",
            "Python",
            "Django",
            "AWS"
        ],
        repoUrl: "http://www.github.com/adamski52/repos/whatever",
        liveUrl: "http://www.jonathanadamski.com/whatever",
        thumbnailUrl: "https://raw.githubusercontent.com/adamski52/timeline-portfolio/master/thumbnail.jpg",
        hearts: 1234
    }, {
        key: "project-3",
        name: "Project 3",
        technologies: [
            "HTML",
            "SCSS",
            "NPM",
            "React",
            "Django",
            "Git",
            "Github",
            "AWS"
        ],
        repoUrl: "http://www.github.com/adamski52/repos/whatever",
        liveUrl: "http://www.jonathanadamski.com/whatever",
        thumbnailUrl: "https://raw.githubusercontent.com/adamski52/timeline-portfolio/master/thumbnail.jpg",
        hearts: 1234
    }, {
        key: "project-4",
        name: "Project 4",
        technologies: [
            "JavaScript",
            "Photoshop",
            "Illustrator",
            "SCSS",
            "NPM",
            "React",
            "Python",
            "AWS"
        ],
        repoUrl: "http://www.github.com/adamski52/repos/whatever",
        liveUrl: "http://www.jonathanadamski.com/whatever",
        thumbnailUrl: "https://raw.githubusercontent.com/adamski52/timeline-portfolio/master/thumbnail.jpg",
        hearts: 1234
    }, {
        key: "project-5",
        name: "Project 5",
        technologies: [
            "JavaScript",
            "Photoshop",
            "React",
            "Python",
            "Django",
            "Git",
            "Github",
            "AWS"
        ],
        repoUrl: "http://www.github.com/adamski52/repos/whatever",
        liveUrl: "http://www.jonathanadamski.com/whatever",
        thumbnailUrl: "https://raw.githubusercontent.com/adamski52/timeline-portfolio/master/thumbnail.jpg",
        hearts: 1234
    }];
}

export default ProjectsHandler;