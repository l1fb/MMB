import React, { Component } from "react";
import axios from "axios";

import InputBox from "./global/InputBox.jsx";
import SubmitBttn from "./global/buttons/SubmitBttn.jsx";

class ReverseFeature extends Component {
    constructor(props) {
        super(props)
        
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
        axios.post('/api/reverse', {
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

export default ReverseFeature;