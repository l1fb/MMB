import React, { Component } from "react";

import RequestFeature from "./RequestFeature.jsx";
import ReverseFeature from "./ReverseStringFeature.jsx"

class Features extends Component {
    render() {
        return (
            <div className="features-container">
                <RequestFeature/>
                <ReverseFeature/>
            </div>
        )
    }
}

export default Features;