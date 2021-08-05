import React, { Component } from 'react'
import './GridExample.css'

export default class GridExample extends Component {
    render() {
        return (
            <div className="gridExemplo">
                <div style={{ backgroundColor: 'red' }}></div>
                <div style={{ backgroundColor: 'green' }}></div>
                <div style={{ backgroundColor: 'blue' }}></div>
                <div style={{ backgroundColor: 'yellow' }}></div>
            </div>
        )
    }
}
