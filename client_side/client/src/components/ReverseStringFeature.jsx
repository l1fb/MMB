import React, { Component } from "react";
import axios from "axios";

import InputBox from "./global/InputBox.jsx";
import SubmitBttn from "./global/buttons/SubmitBttn.jsx";

class ReverseFeature extends Component {
    constructor(props) {
        super(props)
        this.state = {
            str: '',
            reversedstr: ''
        }
    }
    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    verifyEnter = (e) => {
        if (e.key === "Enter") {
            //makes axios call - do i want to do enter?
        }
    }
    reverseRequest = () => {
        axios.post('http://localhost:3000/api/reverse', {
            data: this.state.str
        })
        .then(data => {
            console.log('data thats coming back', data)
            this.setState({
                reversedStr: data.data
            })
        })
        .catch(err => {
            throw err;
        })
    }
    render() {
        return(
            <div className="feature-container">
                <div className="reverse-feature-container feature-items">    
                    <div className="feature-name">Type the string you want to reverse:</div>
                    <input
                        name="str"
                        onChange={this.changeHandler}
                        onKeyPress={this.verifyEnter}
                    />
                    <button onClick={this.reverseRequest}>Submit</button>
                    {/* do some conditional rendering for the output field */}
                </div>
            </div>
        )
    }
}

export default ReverseFeature;