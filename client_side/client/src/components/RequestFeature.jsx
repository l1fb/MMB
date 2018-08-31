import React, { Component } from "react";
import axios from "axios";

import InputBox from "./global/InputBox.jsx";
import SubmitBttn from "./global/buttons/SubmitBttn.jsx";

class RequestFeature extends Component {
    constructor(props) {
        super(props)
        this.state ={
            str: "",
            reverseStr: ""
        }
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    verifyEnter = (e) => {
        if (e.key === "Enter") {
            //makes axios call
        }
    }

    reverseRequest = () => {
        axios.post('/reverse', {
            data: this.state.str
        })
        .then((data) => {
            this.setState({
                reverseStr: data
            })
        })
    }

    render() {
        return(
            <div className="request-feature-container">
                <input
                    name="str"
                    onChange={this.changeHandler}
                    onKeyPress={this.verifyEnter}
                />
                <h5> 
                    {this.reverseStr}
                </h5>
            </div>
        )
    }
}

export default RequestFeature;