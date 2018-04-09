import fetch from "cross-fetch";

class AboutHandler {
    static FETCH_BEGIN = "ABOUT_FETCH_BEGIN";
    static FETCH_SUCCESS = "ABOUT_FETCH_SUCCESS";
    static FETCH_ERROR = "ABOUT_FETCH_ERROR";

    static INITIAL_STATE = {
        geographical: [],
        professional: [],
        social: []
    };

    static reducer(state = AboutHandler.INITIAL_STATE, action) {
        switch(action.type) {
            case AboutHandler.FETCH_SUCCESS:
                return Object.assign({}, state, action.data);
            default:
                return state;
        }
    }

    static fetch() {
        return (dispatch) => {
            dispatch(this.onFetchBegin());

            setTimeout(() => {
                dispatch(this.onFetchSuccess(this.MOCK));
            }, 750);
            // return fetch("/api/about").then((response) => {
            //     return response.json();
            // }).then((json) => {
            //     dispatch(this.onFetchSuccess(json));
            // }).catch((error) => {
            //     dispatch(this.onFetchError(error));
            // });
        }
    }

    static onFetchBegin() {
        return {
            type: this.FETCH_BEGIN
        };
    }

    static onFetchSuccess(data) {
        return {
            type: this.FETCH_SUCCESS,
            data: data
        };
    };

    static onFetchError(error) {
        return {
            type: this.FETCH_ERROR,
            error: error
        };
    };

    static MOCK = {
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
}

export default AboutHandler;