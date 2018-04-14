import React, {Component} from "react";
import Technology from "./Technology";
import Positioned from "../Effects/Positioned";
import Wiggly from "../Effects/Wiggly";

class TechnologiesContainer extends Component {
    render() {
        return (
            <div className="jna-container--technologies">{
                this.props.items.map((item) => {
                    return (
                        <Positioned children={
                            <Wiggly children={
                                <Technology key={item.key} item={item}/>
                            }/>
                        }/>
                    );
                })
            }</div>
        );
    }
}

export default TechnologiesContainer;