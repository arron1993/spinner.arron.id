import React from "react";
import './App.css';

export default class App extends React.Component {
    constructor() {
        super()
        this.state = {
            submitting: false,
        }
        this.onClick = this.onClick.bind(this)
    }

    onClick() {
        this.setState({submitting: true})
        window.setTimeout(() => {
            this.setState({submitting: false})
        }, 3000)
    }

    render() {
        return (
          <div className="App">
             {this.state.submitting && <div className="lds-dual-ring"></div> }
            <button disabled={this.state.submitting} onClick={this.onClick}> Click me </button>
          </div>
        );
    }
}
