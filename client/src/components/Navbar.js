import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
    render() {
        return (
            <ul className="flex">
                    <Link to="/">
                        <li className="mr-6">Home</li>
                    </Link>
                    <Link to="/about">
                        <li className="mr-6">About</li>
                    </Link>
            </ul>
        )
    }
}

export default Navbar
