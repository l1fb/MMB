import React, { Component } from "react";
import axios from "axios";

import InputBox from "./global/InputBox.jsx";
import SubmitBttn from "./global/buttons/SubmitBttn.jsx";

class UrlRequestFeature extends Component {
    constructor(props) {
        super(props)
        this.state = {
            url: '',
            currMethod: 'GET',
            urlData: ''
        }
    }
    changeHandler = () => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    urlRequest = () => {
        axios({
            method: this.state.currMethod
        })
    }
    render() {
        return(
            <div className="url-request-feature-container">
                <input
                    name="url"
                    onChange={this.changeHandler}
                />
                <button onClick={this.urlRequest}>Submit</button>
                <div>
                    <button>Select Method</button>
                </div>
                <h5>
                    {/* do i want to map through? */}
                    {this.state.urlData}
                </h5>
            </div>
        )
    }
}

export default UrlRequestFeature;