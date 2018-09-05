import React, { Component } from "react";
import axios from "axios";
import DataDisplay from "./global/DataDisplay.jsx";

import InputBox from "./global/InputBox.jsx";
import SubmitBttn from "./global/buttons/SubmitBttn.jsx";

class ReverseFeature extends Component {
    constructor(props) {
        super(props)
        this.state = {
            str: '',
            reversedStr: '',
            clicked: false
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
                reversedStr: data.data,
                clicked: true
            })
        })
        .catch(err => {
            throw err;
        })
    }

    flip = () => {
        console.log('is this hitting?')
        this.setState({
            clicked: false
        })
    }

    render() {
        let { clicked } = this.state;
        let style;
        if (clicked) {
            style = {
                transform: 'rotateY(180deg)'
            }
        } else {
            style = {
                transform: 'rotateY(0deg)'
            }
        }
        return(
            <div className="feature-container">
                <div style={style}className="flip-container">
                <div className="reverse-feature-container feature-items front">    
                    <div className="feature-name">Type the string you want to reverse:</div>
                    <input
                        name="str"
                        onChange={this.changeHandler}
                        onKeyPress={this.verifyEnter}
                    />
                    <button onClick={this.reverseRequest}>Submit</button>
                    {/* do some conditional rendering for the output field */}
                </div>
                <div className="back">
                    <p> {this.state.reversedStr} </p>
                    <button onClick={this.flip}>Redo</button>
                </div>
                </div>
                {'clicked state:' + this.state.clicked}
            </div>
        )
    }
}

export default ReverseFeature;