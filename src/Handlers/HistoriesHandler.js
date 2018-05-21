import fetch from "cross-fetch";

class HistoriesHandler {
    static FETCH_BEGIN = "HISTORY_FETCH_BEGIN";
    static FETCH_SUCCESS = "HISTORY_FETCH_SUCCESS";
    static FETCH_ERROR = "HISTORY_FETCH_ERROR";
    static ACTIVATE_ITEM = "HISTORY_ACTIVATE_ITEM";

    static INITIAL_STATE = {
        histories: [],
        activeItem: undefined
    };

    static reducer(state = HistoriesHandler.INITIAL_STATE, action) {
        switch(action.type) {
            case HistoriesHandler.FETCH_SUCCESS:
                return Object.assign({}, state, {
                    histories: action.data,
                    activeItem: action.data[0]
                });

            case HistoriesHandler.ACTIVATE_ITEM:
                return Object.assign({}, state, {
                    activeItem: action.item
                });

            default:
                return state;
        }
    }

    static fetch() {
        return (dispatch) => {
            dispatch(HistoriesHandler.onFetchBegin());

            setTimeout(() => {
                dispatch(HistoriesHandler.onFetchSuccess(HistoriesHandler.MOCK));
            }, 750);
            // return fetch("/api/history").then((response) => {
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
            type: HistoriesHandler.FETCH_BEGIN
        };
    }

    static onFetchSuccess(data) {
        return {
            type: HistoriesHandler.FETCH_SUCCESS,
            data: data
        };
    };

    static onFetchError(error) {
        return {
            type: HistoriesHandler.FETCH_ERROR,
            error: error
        };
    };

    static onActivateHistory(item) {
        return {
            type: HistoriesHandler.ACTIVATE_ITEM,
            item: item
        };
    }

    static MOCK = [{
        startDate: "01-01-2000",
        endDate: "present",
        name: "Some Job",
        jobTitle: "Some Guy",
        thumbnailUrl: require("../_assets/history/logos/2020.png"),
        description: ["i did some stuff"],
        related: [{
            description: "vendor to Lowes",
            url: require("../_assets/history/logos/lowes.png")
        }, {
            description: "vendor to B&Q China",
            url: require("../_assets/history/logos/b-q.png")
        }, {
            description: "vendor to Menards",
            url: require("../_assets/history/logos/menards.png")
        }]
    }, {
        startDate: "01-01-1999",
        endDate: "01-01-2000",
        name: "Some Other Job",
        jobTitle: "Some Other Guy",
        thumbnailUrl: require("../_assets/history/logos/persis.png"),
        description: ["i did some stuff"],
        related: [{
            description: "vendor to Buick",
            url: require("../_assets/history/logos/buick.png")
        }, {
            description: "vendor to Cadillac",
            url: require("../_assets/history/logos/cadillac.png")
        }, {
            description: "vendor to Chevrolet",
            url: require("../_assets/history/logos/chevy.png")
        }, {
            description: "vendor to General Motors",
            url: require("../_assets/history/logos/gm.png")
        }, {
            description: "vendor to OnStar",
            url: require("../_assets/history/logos/onstar.png")
        }, {
            description: "vendor to Verizon Wireless",
            url: require("../_assets/history/logos/vzw.png")
        }, {
            description: "featured at the Consumer Electronics Show",
            url: require("../_assets/history/logos/ces.png")
        }, {
            description: "featured at Mobile World Congress",
            url: require("../_assets/history/logos/mwc.png")
        }, {
            description: "featured at the North American International Auto Show",
            url: require("../_assets/history/logos/naias.png")
        }]
    }, {
        startDate: "01-01-1998",
        endDate: "01-01-1999",
        name: "Some Other Job 2",
        jobTitle: "Some Other Guy 2",
        thumbnailUrl: require("../_assets/history/logos/bcbs.png"),
        description: ["i did some stuff"],
        related: []
    }, {
        startDate: "01-01-1997",
        endDate: "01-01-1998",
        name: "Some Other Job 3",
        jobTitle: "Some Other Guy 3",
        thumbnailUrl: require("../_assets/history/logos/drfirst.png"),
        description: ["i did some stuff"],
        related: []
    }, {
        startDate: "01-01-1996",
        endDate: "01-01-1997",
        name: "Some Other Job 4",
        jobTitle: "Some Other Guy 4",
        thumbnailUrl: require("../_assets/history/logos/ford.png"),
        description: ["i did some stuff"],
        related: [{
            description: "contracted through Halo Group",
            url: require("../_assets/history/logos/halo.png")
        }]
    }, {
        startDate: "01-01-1999",
        endDate: "01-01-2000",
        name: "Some Other Job 5",
        jobTitle: "Some Other Guy 5",
        thumbnailUrl: require("../_assets/history/logos/mediag.png"),
        description: ["i did some stuff"],
        related: [{
            description: "vendor to Chevrolet",
            url: require("../_assets/history/logos/chevy.png")
        }, {
            description: "vendor to Chrysler",
            url: require("../_assets/history/logos/chrysler.png")
        }, {
            description: "vendor to Detroit Diesel",
            url: require("../_assets/history/logos/detroit-diesel.png")
        }, {
            description: "vendor to Disney's Happy Feet",
            url: require("../_assets/history/logos/disney.png")
        }, {
            description: "vendor to Dodge",
            url: require("../_assets/history/logos/dodge.png")
        }, {
            description: "vendor to General Motors",
            url: require("../_assets/history/logos/gm.png")
        }, {
            description: "vendor to GMC",
            url: require("../_assets/history/logos/gmc.png")
        }, {
            description: "vendor to Buick",
            url: require("../_assets/history/logos/buick.png")
        }, {
            description: "vendor to Scion",
            url: require("../_assets/history/logos/scion.png")
        }, {
            description: "vendor to Volkswagen",
            url: require("../_assets/history/logos/vw.png")
        }]
    }, {
        startDate: "01-01-1999",
        endDate: "01-01-2000",
        name: "Some Other Job 6",
        jobTitle: "Some Other Guy 6",
        thumbnailUrl: require("../_assets/history/logos/ford.png"),
        description: ["i did some stuff"],
        related: [{
            description: "contracted through Aquent",
            url: require("../_assets/history/logos/aquent.png")
        }]
    }, {
        startDate: "01-01-1996",
        endDate: "01-01-1997",
        name: "Some Other Job 7",
        jobTitle: "Some Other Guy 7",
        thumbnailUrl: require("../_assets/history/logos/mrx.png"),
        description: ["i did some stuff"],
        related: []
    }, {
        startDate: "01-01-1996",
        endDate: "01-01-1997",
        name: "Some Other Job 8",
        jobTitle: "Some Other Guy 8",
        thumbnailUrl: require("../_assets/history/logos/optum.png"),
        description: ["i did some stuff"],
        related: [{
            description: "previously UnitedHealthcare IT",
            url: require("../_assets/history/logos/uhc.png")
        }, {
            description: "originally contracted through DPM Consulting",
            url: require("../_assets/history/logos/dpm.png")
        }]
    }, {
        startDate: "01-01-1996",
        endDate: "01-01-1997",
        name: "Some Other Job 7",
        jobTitle: "Some Other Guy 7",
        thumbnailUrl: require("../_assets/history/logos/raytheon.png"),
        description: ["i did some stuff"],
        related: []
    }];
}

export default HistoriesHandler;