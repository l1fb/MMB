import React, { Component } from "react";

import HttpRequestFeature from "./HttpRequestFeature.jsx";
import ReverseFeature from "./ReverseStringFeature.jsx"

class Features extends Component {
    render() {
        return (
            <div className="features-container">
                <HttpRequestFeature/>
                <ReverseFeature/>
            </div>
        )
    }
}

export default Features;