class HttpService {
    static APIBase = (window.location.hostname === "localhost" ? "http://localhost:8080" : "") + "/api";

    static toJson(promise) {
        return promise.then((response) => {
            return response.json();
        }).then((json) => {
            return json.data;
        });
    }

    static get(url) {
        return HttpService.toJson(fetch(HttpService.APIBase + url, {
            method: "GET"
        }));
    }

    static post(url, data) {
        return HttpService.toJson(fetch(HttpService.APIBase + url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }));
    }
}

export default HttpService;