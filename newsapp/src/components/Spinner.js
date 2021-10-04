import React, { Component } from 'react'

export class Spinner extends Component {
    render() {
        return (
            <div className="container text-center">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }
}

export default Spinner
