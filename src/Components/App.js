import React, {Component} from "react";
import "./App.css";
import AboutPage from "../Pages/AboutPage";

class App extends Component {
    render() {
        return (
            <div className="container-fluid jna--app">
                <AboutPage/>
            </div>
        );
    }
}

export default App;
