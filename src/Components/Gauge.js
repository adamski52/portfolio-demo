import React, {Component} from "react";

class Gauge extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 0
        };
    }

    setupTicker(delta) {
        clearInterval(this.ticker);
        this.ticker = setInterval(() => {
            this.onTick(delta);
        }, this.props.tickRate);
    }

    onMouseLeave(e) {
        e.preventDefault();
        this.setupTicker(-1);
    }

    onMouseEnter(e) {
        e.preventDefault();
        this.setupTicker(1);
    }

    onTick(delta) {
        if(delta === 0) {
            clearInterval(this.ticker);
            return;
        }

        if(delta > 0 && this.state.value >= this.props.max) {
            clearInterval(this.ticker);
            return;
        }

        if(delta < 0 && this.state.value <= 0) {
            clearInterval(this.ticker);
            return;
        }

        this.setState({
            value: this.state.value + delta
        });
    }

    render() {
        return (
            <div className={"jna-component--gauge-" + this.state.value}
                onMouseLeave={(e) => {
                     this.onMouseLeave(e);
                }}
                onMouseEnter={(e) => {
                    this.onMouseEnter(e);
                }}
            >
                <div className="jna-component--gauge-mask">
                    <div className="jna-component--gauge-indicator"/>
                </div>
                <div className="jna-component--gauge-name">{this.props.name}</div>
            </div>
        );
    }
}

export default Gauge;