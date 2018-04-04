import Rx from "rxjs";
import HttpService from "../Http.service";

class ProjectsService {
    static mock = [{
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
            "Github"
        ],
        repoUrl: "http://www.github.com/adamski52/repos/whatever",
        thumbnailUrl: "https://raw.githubusercontent.com/adamski52/timeline-portfolio/master/thumbnail.jpg",
        
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

    static subscribe(context) {
        return ProjectsService.subject.subscribe((projects) => {
            context.setState(projects);
        });
    }
}

export default ProjectsService;