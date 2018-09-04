import React from "react";

class Counterform extends React.Component {
    render() {
        return (
            <form>
                <input type="button" className="btn btn-success" value="Increment" onClick={this.props.incrementHandler}></input>&nbsp;&nbsp;
                    <input type="button" className="btn btn-danger" value="Decrement" onClick={this.props.decrementHandler}></input>
            </form>
        );
    }
}

export default Counterform;