import React from "react";

//There are two ways to work with forms one is controlled components and other is uncontrolled components
// Controlled components - Two way binding with React State.
// To make it Uncontrolled use an attribute called ref and use a callback 
// <input type="textarea" ref={node => {this.textControl = node; }} defaultValue="test" />
// <input type="textarea" ref={(node) => {this.textControl = node; }} defaultValue="test" />
// Have a submit method and add in the object get the value as this.textControl.value

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
        this.submitNewForm = this.submitNewForm.bind(this);
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
    submitNewForm() {
        const newForm = {
            newText: this.areaText.value
        }
        console.log("New form submission to get", newForm);
    }
    render() {
        return (
            <div>
                <form>
                    <label><strong>Controlled Form</strong></label><br />
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
                <label><strong>Uncontrolled Form</strong></label><br />
                <form>
                    <input type="textarea" ref={(node) => {
                        this.areaText = node;
                    }} defaultValue="test" />
                    <input type="button" value="Request" onClick={this.submitNewForm} />
                </form>
            </div>
        );
    }
}

export default ReactForm;