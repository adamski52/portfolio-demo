import Rx from "rxjs";
import HttpService from "../Http.service";
import ProjectsService from "./Projects.service";

class AboutService {
    static mock = {
        social: [{
            key: "Twitter",
            value: "@oooyaya",
            url: "http://www.twitter.com",
            className: "jna-icon-twitter"
        }, {
            key: "Instagram",
            value: "oooyaya",
            url: "http://www.instagram.com",
            className: "jna-icon-instagram"
        }, {
            key: "Steam",
            value: "the macgyver theme song",
            url: "http://www.steampowered.com",
            className: "jna-icon-steam"
        }],
        professional: [{
            key: "Github",
            value: "adamski52",
            url: "http://www.github.com",
            className: "jna-icon-github"
        }, {
            key: "LinkedIn",
            value: "jadamski",
            url: "http://www.linkedin.com",
            className: "jna-icon-linkedin"
        }, {
            key: "Stack Overflow",
            value: "oooyaya",
            url: "http://www.stackoverflow.com",
            className: "jna-icon-stack-overflow"
        }],
        geographical: [ {
            key: "Location",
            value: "Cleveland, OH\nUSA, Earth",
            className: "jna-icon-map-marker"
        }, {
            key: "Email",
            value: "send me spam!",
            url: "mailto:me@jonathanadamski.com",
            className: "jna-icon-envelope"
        }, {
            key: "Phone",
            value: "734-968-3174",
            url: "tel:7349683174",
            className: "jna-icon-phone"
        }]
    };

    static subject = new Rx.BehaviorSubject({
        professional: [],
        geographical: [],
        social: []
    });

    static get() {
        // return HttpService.get("/about").then((response) => {
        //     AboutService.subject.next(response);
        // });

        setTimeout(() => {
            AboutService.subject.next(AboutService.mock);
        }, 750);
    }

    static bind(context) {
        return AboutService.subject.subscribe((state) => {
            context.setState(state);
        });
    }

    static listen(handler = () => {}) {
        return AboutService.subject.subscribe((state) => {
            handler(state);
        });
    }

    static subscribe(context, handler = () => {}) {
        return AboutService.subject.subscribe((state) => {
            context.setState(state);
            handler(state);
        });
    }
}

export default AboutService;