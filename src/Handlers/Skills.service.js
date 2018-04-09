import Rx from "rxjs";
import HttpService from "../Http.service";
import ProjectsService from "./Projects.service";
import AboutService from "./About.service";

class SkillsService {
    static mock = [{
        key: "NPM",
        proficiency: 100,
        className: "devicon-npm-original-wordmark"
    }, {
        key: "Iconic",
        proficiency: 5,
        className: "devicon-ionic-original"
    }, {
        key: "Electron",
        proficiency: 5,
        className: "devicon-electron-original"
    }, {
        key: "Yarn",
        proficiency: 100,
        className: "devicon-yarn-plain"
    }, {
        key: "Handlebars & Mustache",
        proficiency: 100,
        className: "devicon-handlebars-plain"
    }, {
        key: "CouchDB",
        proficiency: 50,
        className: "devicon-couchdb-plain"
    }, {
        key: "Elm",
        proficiency: 0,
        className: "devicon-elm-plain"
    }, {
        key: "CakePHP",
        proficiency: 0,
        className: "devicon-cakephp-plain"
    }, {
        key: "Express",
        proficiency: 85,
        className: "devicon-express-original"
    }, {
        key: "IntelliJ",
        proficiency: 90,
        className: "devicon-intellij-plain"
    }, {
        key: "Pycharm",
        proficiency: 0,
        className: "devicon-pycharm-plain"
    }, {
        key: "Ruby Mine",
        proficiency: 0,
        className: "devicon-rubymine-plain"
    }, {
        key: "Webstorm",
        proficiency: 100,
        className: "devicon-webstorm-plain"
    }, {
        key: "Tomcat",
        proficiency: 70,
        className: "devicon-tomcat-line"
    }, {
        key: "VueJS",
        proficiency: 0,
        className: "devicon-vuejs-plain"
    }, {
        key: "Swift",
        proficiency: 0,
        className: "devicon-swift-plain"
    }, {
        key: "Webpack",
        proficiency: 80,
        className: "devicon-webpack-plain"
    }, {
        key: "Visual Studio",
        proficiency: 70,
        className: "devicon-visualstudio-plain"
    }, {
        key: "Slack",
        proficiency: 100,
        className: "devicon-slack-plain"
    }, {
        key: "TypeScript",
        proficiency: 100,
        className: "devicon-typescript-plain"
    }, {
        key: "Babel",
        proficiency: 90,
        className: "devicon-babel-plain"
    }, {
        key: "Mocha",
        proficiency: 90,
        className: "devicon-mocha-plain"
    }, {
        key: "Jasmine",
        proficiency: 100,
        className: "devicon-jasmine-plain"
    }, {
        key: "SSH",
        proficiency: 100,
        className: "devicon-ssh-plain"
    }, {
        key: "SourceTree",
        proficiency: 100,
        className: "devicon-sourcetree-plain"
    }, {
        key: "PHPStorm",
        proficiency: 0,
        className: "devicon-phpstorm-plain"
    }, {
        key: "Protractor",
        proficiency: 70,
        className: "devicon-protractor-plain"
    }, {
        key: "Gradle",
        proficiency: 50,
        className: "devicon-gradle-plain"
    }, {
        key: "Cucumber",
        proficiency: 70,
        className: "devicon-cucumber-plain"
    }, {
        key: "Gitlab",
        proficiency: 100,
        className: "devicon-gitlab-plain"
    }, {
        key: "Github",
        proficiency: 100,
        className: "devicon-github-plain"
    }, {
        key: "D3JS",
        proficiency: 10,
        className: "devicon-d3js-plain"
    }, {
        key: "Confluence",
        proficiency: 100,
        className: "devicon-confluence-plain"
    }, {
        key: "Bitbucket & Stash",
        proficiency: 100,
        className: "devicon-bitbucket-plain"
    }, {
        key: "Django",
        proficiency: 60,
        className: "devicon-django-plain"
    }, {
        key: "GIMP",
        proficiency: 85,
        className: "devicon-gimp-plain"
    }, {
        key: "C++",
        proficiency: 60,
        className: "devicon-cplusplus-plain"
    }, {
        key: "C#",
        proficiency: 60,
        className: "devicon-csharp-plain"
    }, {
        key: "C",
        proficiency: "60",
        className: "devicon-c-plain"
    }, {
        key: "NW & Node Webkit",
        proficiency: 0,
        className: "devicon-nodewebkit-plain"
    }, {
        key: "NGINX",
        proficiency: 90,
        className: "devicon-nginx-plain"
    }, {
        key: "Erlang",
        proficiency: 0,
        className: "devicon-erlang-plain"
    }, {
        key: "Apache",
        proficiency: 90,
        className: "devicon-apache-plain"
    }, {
        key: "Redis",
        proficiency: 0,
        className: "devicon-redis-plain"
    }, {
        key: "Meteor",
        proficiency: 0,
        className: "devicon-meteor-plain"
    }, {
        key: "Heroku",
        proficiency: 25,
        className: "devicon-heroku-plain"
    }, {
        key: "Go",
        proficiency: 0,
        className: "devicon-go-plain"
    }, {
        key: "Docker",
        proficiency: 80,
        className: "devicon-docker-plain"
    }, {
        key: "AWS",
        proficiency: 70,
        className: "devicon-amazonwebservices-plain"
    }, {
        key: "Android",
        proficiency: 60,
        className: "devicon-android-plain"
    }, {
        key: "Angular & AngularJS",
        proficiency: 100,
        className: "devicon-angularjs-plain"
    }, {
        key: "Apple & macOS",
        proficiency: 90,
        className: "devicon-apple-plain"
    }, {
        key: "Atom",
        proficiency: 0,
        className: "devicon-atom-plain"
    }, {
        key: "BackboneJS",
        proficiency: 90,
        className: "devicon-backbonejs-plain"
    }, {
        key: "Bootstrap",
        proficiency: 90,
        className: "devicon-bootstrap-plain"
    }, {
        key: "Bower",
        proficiency: 80,
        className: "devicon-bower-plain"
    }, {
        key: "CoffeeScript",
        proficiency: 80,
        className: "devicon-coffeescript-plain"
    }, {
        key: "CSS",
        proficiency: 90,
        className: "devicon-css3-plain"
    }, {
        key: ".NET",
        proficiency: 70,
        className: "devicon-dot-net-plain"
    }, {
        key: "Drupal",
        proficiency: 90,
        className: "devicon-drupal-plain"
    }, {
        key: "Git",
        proficiency: 90,
        className: "devicon-git-plain"
    }, {
        key: "Grunt",
        proficiency: 100,
        className: "devicon-grunt-plain"
    }, {
        key: "Gulp",
        proficiency: 100,
        className: "devicon-gulp-plain"
    }, {
        key: "HTML",
        proficiency: 100,
        className: "devicon-html5-plain"
    }, {
        key: "Illustrator",
        proficiency: 80,
        className: "devicon-illustrator-plain"
    }, {
        key: "Java",
        proficiency: 70,
        className: "devicon-java-plain"
    }, {
        key: "JavaScript & ES6+",
        proficiency: 100,
        className: "devicon-javascript-plain"
    }, {
        key: "jQuery",
        proficiency: 90,
        className: "devicon-jquery-plain"
    }, {
        key: "KrakenJS",
        proficiency: 0,
        className: "devicon-krakenjs-plain"
    }, {
        key: "LESS",
        proficiency: 100,
        className: "devicon-less-plain-wordmark"
    }, {
        key: "Linux",
        proficiency: 90,
        className: "devicon-linux-plain"
    }, {
        key: "MongoDB",
        proficiency: 80,
        className: "devicon-mongodb-plain"
    }, {
        key: "MySQL",
        proficiency: 90,
        className: "devicon-mysql-plain"
    }, {
        key: "NodeJS",
        proficiency: 95,
        className: "devicon-nodejs-plain"
    }, {
        key: "Oracle",
        proficiency: 70,
        className: "devicon-oracle-plain"
    }, {
        key: "Photoshop",
        proficiency: 100,
        className: "devicon-photoshop-plain"
    }, {
        key: "PHP",
        proficiency: 85,
        className: "devicon-php-plain"
    }, {
        key: "PostgreSQL",
        proficiency: 75,
        className: "devicon-postgresql-plain"
    }, {
        key: "Python",
        proficiency: 75,
        className: "devicon-python-plain"
    }, {
        key: "Ruby on Rails",
        proficiency: 25,
        className: "devicon-rails-plain"
    }, {
        key: "React",
        proficiency: 90,
        className: "devicon-react-plain"
    }, {
        key: "Ruby",
        proficiency: 25,
        className: "devicon-ruby-plain"
    }, {
        key: "SASS & SCSS",
        proficiency: 100,
        className: "devicon-sass-plain"
    }, {
        key: "Sequelize",
        proficiency: 0,
        className: "devicon-sequelize-plain"
    }, {
        key: "Travis",
        proficiency: 85,
        className: "devicon-travis-plain"
    }, {
        key: "VIM",
        proficiency: 85,
        className: "devicon-vim-plain"
    }, {
        key: "Windows",
        proficiency: 100,
        className: "devicon-windows8-plain"
    }, {
        key: "Wordpress",
        proficiency: 60,
        className: "devicon-wordpress-plain"
    }];

    static subject = new Rx.BehaviorSubject({
        skills: []
    });

    static get() {
        // return HttpService.get("/skills").then((response) => {
        //     SkillsService.subject.next(response);
        // });

        setTimeout(() => {
            SkillsService.subject.next({
                skills: SkillsService.mock
            });
        }, 750);
    }

    static bind(context) {
        return SkillsService.subject.subscribe((state) => {
            context.setState(state);
        });
    }

    static listen(handler = () => {}) {
        return SkillsService.subject.subscribe((state) => {
            handler(state);
        });
    }

    static subscribe(context, handler = () => {}) {
        return SkillsService.subject.subscribe((state) => {
            context.setState(state);
            handler(state);
        });
    }
}

export default SkillsService;