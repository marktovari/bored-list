import React, { Component } from 'react'
import { BrowserRouter as Router, Link, } from 'react-router-dom'

export class Navbar extends Component {
    render() {
        return (
            <ul className="flex">
                <Router>
                    <Link to="/list">
                        <li className="mr-6">Home</li>
                    </Link>
                </Router>
                <Router>
                    <Link to="/about">
                        <li className="mr-6">About</li>
                    </Link>
                </Router>
            </ul>
        )
    }
}

export default Navbar
