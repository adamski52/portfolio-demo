import Rx from "rxjs";
import HttpService from "../Http.service";

class ProjectsService {
    static mock = [{
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

    static subject = new Rx.BehaviorSubject({
        projects: []
    });

    static get() {
        // return HttpService.get("/projects").then((response) => {
        //     ProjectsService.subject.next(response);
        // });

        setTimeout(() => {
            ProjectsService.subject.next({
                projects: ProjectsService.mock
            });
        }, 750);
    }

    static bind(context) {
        return ProjectsService.subject.subscribe((state) => {
            context.setState(state);
        });
    }

    static listen(handler = () => {}) {
        return ProjectsService.subject.subscribe((state) => {
            handler(state);
        });
    }

    static subscribe(context, handler = () => {}) {
        return ProjectsService.subject.subscribe((state) => {
            context.setState(state);
            handler(state);
        });
    }
}

export default ProjectsService;