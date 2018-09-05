import React, { Component } from "react";
import axios from "axios";

import InputBox from "./global/InputBox.jsx";
import SubmitBttn from "./global/buttons/SubmitBttn.jsx";
import { timingSafeEqual } from "crypto";

class UrlRequestFeature extends Component {
    constructor(props) {
        super(props)
        this.state = {
            url: '',
            urlData: 'Not a Valid Request',
            value: 'Select:',
            methodOptions: [
                {
                    name: 'Select',
                    value: 'Select'
                },
                {
                    name: 'GET',
                    value: 'GET'
                },
                {
                    name: 'POST',
                    value: 'POST'
                }
            ],
            clicked: false
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
                    urlData: result,
                    clicked: true
                })
            })
            .catch(err => {
                // err display for users
                throw err;
            })
        } else if (value === "GET" ) {
            axios.get(`http://localhost:3000/api/?url=${this.state.url}`, {
            })
            .then(data => {
                let result = JSON.stringify(data.data);
                this.setState({
                    urlData: result,
                    clicked: true
                })
            })
            .catch(err => {
                throw err;
            })
        } else {
            this.setState({
                clicked: true
            })
        }
    }

    flip = () => {
        this.setState({
            clicked: false
        })
    }

    render() {
        const { url, urlData, value, methodOptions, clicked } = this.state;
        let style, fstyle, bstyle;
        if (clicked) {
            style = {
                transform: 'rotateY(180deg)'
            }
            fstyle = {
                display: 'none'
            }
            bstyle = {
                display: 'flex'
            }
        } else {
            style = {
                transform: 'rotateY(0deg)'
            }
            fstyle = {
                display: 'flex'
            }
            bstyle = {
                display: 'none'
            }
        }
        return(
            <div className="feature-container">
                <div style={style} className="flip-container">
                    <div style={fstyle} className="url-request-feature-container feature-items front">
                        <div className="feature-name">Type the url:</div>
                            <input
                                name="url"
                                onChange={this.changeHandler}
                            />
                        <div className="select-text">Select the request type: </div>
                        
                        <div className="submit-method-container">
                            <div className="select-container">
                                <select onChange={this.selectChangeHandler} value={value}>
                                    {methodOptions.map(optionEntry => (
                                        <option key={optionEntry.value} value={optionEntry.value}>
                                            {optionEntry.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <button onClick={this.urlRequest}>Submit</button>
                        </div>
                    </div>
                    <div style={bstyle} className="back">
                        <p>{this.state.urlData}</p>
                        <button onClick={this.flip}>Redo</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default UrlRequestFeature;