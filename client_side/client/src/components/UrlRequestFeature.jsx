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
            value: 'GET',
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
        //err handle - if no url
        let { value } = this.state;

        if ( value === "POST" ) {
            axios.post('http://localhost:3000/api/url', {
                data: {
                    url: this.state.url
                }
            })
            .then(data => {
                let result = JSON.stringify(data.data);
                this.setState({
                    urlData: result
                })
            })
            .catch(err => {
                // err display for users
                throw err;
            })
        } else {
            axios.get(`http://localhost:3000/api/?url=${this.state.url}`, {
            })
            .then(data => {
                let result = JSON.stringify(data.data);
                this.setState({
                    urlData: result
                })
            })
            .catch(err => {
                throw err;
            })
        }
    }

    render() {
        const { url, urlData, value, methodOptions } = this.state;

        return(
            <div className="feature-container">
                <div className="url-request-feature-container feature-items">
                    <div className="feature-name">Type the url:</div>
                        <input
                            name="url"
                            onChange={this.changeHandler}
                        />
                        <div>Select the request type: </div>
                    <div>
                        <select onChange={this.selectChangeHandler} value={value}>
                            {methodOptions.map(optionEntry => (
                                <option key={optionEntry.value} value={optionEntry.value}>
                                    {optionEntry.name}
                                </option>
                            ))}
                        </select>
                        <button onClick={this.urlRequest}>Submit</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default UrlRequestFeature;