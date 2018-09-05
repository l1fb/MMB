import React, { Component } from "react";
import axios from "axios";

class ReverseFeature extends Component {
    constructor(props) {
        super(props)
        this.state = {
            str: '',
            reversedStr: 'No Input Found',
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
        if(this.state.reversedStr !== 'no input found') {
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
        let { clicked , reversedStr } = this.state;
        let style, fstyle, bstyle;
        if (clicked) {
            style = {
                transform: 'rotateY(180deg)',
            }
            fstyle = {
                display: 'none'
            }
            bstyle = {
                display: 'flex'
            }
        } else {
            style = {
                transform: 'rotateY(0deg)',
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
                    <div style={fstyle} className="reverse-feature-container feature-items front">    
                        <div className="feature-name">Type the string you want to reverse:</div>
                        <input
                            name="str"
                            onChange={this.changeHandler}
                            onKeyPress={this.verifyEnter}
                        />
                        <button onClick={this.reverseRequest}>Submit</button>
                        {/* do some conditional rendering for the output field */}
                    </div>
                    <div style={bstyle} className="back">
                        <p className="result-text"> { reversedStr } </p>
                        <button onClick={this.flip}>Redo</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ReverseFeature;