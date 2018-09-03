import React, { Component } from "react";

import UrlRequestFeature from "./UrlRequestFeature.jsx";
import ReverseFeature from "./ReverseStringFeature.jsx"

class Features extends Component {
    render() {
        return (
            <div className="features-container">
                <ReverseFeature/>
                <UrlRequestFeature/>
            </div>
        )
    }
}

export default Features;