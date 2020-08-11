
// Import module and default styles
import { CircularProgressbar } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";

import React, { Component } from 'react'

export class CircularProgressDemo2 extends Component {
    render() {
        return (
            <div>
                <div style={{ width: "40%" }}>
                    <CircularProgressbar percentage={66} strokeWidth={12} text={`${66}%`} />
                </div>
            </div>
        )
    }
}

export default CircularProgressDemo2

