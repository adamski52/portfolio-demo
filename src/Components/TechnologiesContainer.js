import React, {Component} from "react";
import Technology from "./Technology";

class TechnologiesContainer extends Component {
    render() {
        return (
            <div className="col-md-push-1 col-md-4 jna-container--technologies">{
                this.props.items.map((item) => {
                    return (
                        <Technology item={item} />
                    );
                })
            }</div>
        );
    }
}

export default TechnologiesContainer;