import React from "react";
import CounterDisplay from './CounterDisplay';
import Counterform from './Counterform';
import PropTypes from "prop-types";

class ReactCounter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        this.incrementCount = this.incrementCount.bind(this);
        this.decrementCount = this.decrementCount.bind(this);
    }

    incrementCount() {
        console.log("Incrementing..", this);
        //For Asynchronously changing the state use callback and update the state with the previous state
        // this.setState({
        //     count: count + 1
        // });
        this.setState(prevState => ({ count: prevState.count + 1 }));
    }

    decrementCount() {
        console.log("Decrementing...", this);
        this.setState(prevState => ({ count: prevState.count - 1 }));
    }
    render() {
        return (
            <div style={{ padding: "20", margin: "20" }}>
                <Counterform incrementHandler={this.incrementCount} decrementHandler={this.decrementCount} />
                <CounterDisplay value={this.state.count} />
                <CounterDisplay />
            </div>
        )
    }
}


export default ReactCounter;