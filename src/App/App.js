import React, {Component} from "react";
import "./App.css";
import About from "../About/About.component";

class App extends Component {
    render() {
        return (
            <div className="container-fluid app-wrapper">
                <About />
            </div>
        );
    }
}

export default App;
