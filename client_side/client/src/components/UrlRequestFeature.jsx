import React, { Component } from "react";
import axios from "axios";

import InputBox from "./global/InputBox.jsx";
import SubmitBttn from "./global/buttons/SubmitBttn.jsx";

class UrlRequestFeature extends Component {
    constructor(props) {
        super(props)
        this.state = {
            url: '',
            urlData: '',
            value: 'not selected',
            methodOptions: [
                {
                    name: 'GET',
                    value: 'GET'
                },
                {
                    name: 'POST',
                    value: 'POST'
                }
            ]
        }
    }
    
    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    selectChangeHandler = (e) => {
        this.setState({value: e.target.value})
    }

    urlRequest = () => {
        axios({
            method: this.state.currMethod
        })
    }

    render() {
        const { url, urlData, value, methodOptions } = this.state;

        return(
            <div className="url-request-feature-container">
                <input
                    name="url"
                    onChange={this.changeHandler}
                />
                <button onClick={this.urlRequest}>Submit</button>
                <select onChange={this.selectChangeHandler} value={value}>
                    {
                    methodOptions.map(optionEntry => (
                        <option key={optionEntry.value} value={optionEntry.value}>
                            {optionEntry.name}
                        </option>
                    ))
                    }
                </select>
                <h5>
                    {/* do i want to map through? */}
                    
                    {urlData}
                    {value}
                </h5>
            </div>
        )
    }
}

export default UrlRequestFeature;