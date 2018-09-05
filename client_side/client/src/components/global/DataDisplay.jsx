import React, { Component } from 'react';

class DataDisplay extends Component {
    constructor(props) {
        super(props)
    }

    render () {
        let stle = this.props.flipCSS
        if(stle === undefined) stle = "";
        console.log('is anything coming back here?', this.props)
        return(
            <div className={"data-display-container back" + stle}>
                {this.props.data}
                This is the back!
            </div>
        )
    }
};

export default DataDisplay;