import React from "react";

class ReactDate extends React.Component {
    constructor(props) {
        super(props);
        const timestamp = new Date().toLocaleTimeString();
        console.log(timestamp);
        this.state = {
            currentTime: timestamp
            //currentTime,
        };
        console.log("Inside constructor")
    }

    componentDidMount() {
        console.log("Component was mounted successfully");

        setInterval(() => {
            const ts = new Date().toLocaleTimeString();
            this.setState({ currentTime: ts });
        }, 1000);
    }


    render() {
        return <h1>{this.state.currentTime}</h1>
    }
}

export default ReactDate;