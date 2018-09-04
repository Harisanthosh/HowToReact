import React from "react";

//There are two ways to work with forms one is controlled components and other is uncontrolled components
// Controlled components - Two way binding with React State.

class ReactForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            text: " ",
            check: false,
            selected: " "
        }
        this.handleText = this.handleText.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
        this.handleRadio = this.handleRadio.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    handleText(ev) {
        console.log(ev.target.value);
        this.setState({ text: ev.target.value });
    }
    handleCheck(ev) {
        console.log(ev.target.checked);
        this.setState({ check: ev.target.checked });
    }
    handleRadio(ev) {
        console.log(ev.target.value);
        this.setState({ selected: ev.target.value });
    }
    submitForm() {
        const formValues = {
            text: this.state.text,
            checked: this.state.check,
            selected: this.state.selected
        }
        console.log("Submitted values are", formValues);
    }
    render() {
        return (
            <div>
                <form>
                    <input type="text" onChange={this.handleText} value={this.state.text} />
                    <br />
                    <input type="checkbox" onChange={this.handleCheck} value={this.state.check} />Enroll now
                    <br />
                    <input type="radio" value="yes" name="poll" onChange={this.handleRadio} /> Yes
                    <input type="radio" value="no" name="poll" onChange={this.handleRadio} /> No
                    <br />
                    <input type="button" value="Submit" onClick={this.submitForm} />
                </form>
                <h3>{this.state.text}</h3>
                <h3>{this.state.check}</h3>
            </div>
        );
    }
}

export default ReactForm;