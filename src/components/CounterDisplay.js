//By raising the state up we communicate between siblings (i.e by passing it to the ancestor)
// Render method also fires when the property also changes
import React from "react";

class CounterDisplay extends React.Component {
    render() {
        return (
            <div>
                <h2>{this.props.value}</h2>
            </div>
        );
    }
}

export default CounterDisplay;