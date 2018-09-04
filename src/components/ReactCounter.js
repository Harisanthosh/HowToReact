import React from "react";

class ReactCounter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
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
                <form>
                    <input type="button" className="btn btn-success" value="Increment" onClick={this.incrementCount.bind(this)}></input>&nbsp;&nbsp;
                    <input type="button" className="btn btn-danger" value="Decrement" onClick={this.decrementCount.bind(this)}></input>
                </form>
                <h2>{this.state.count}</h2>
            </div>
        )
    }
}

export default ReactCounter;