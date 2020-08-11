

import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
export class Navbar extends Component {
    render() {
        return (
            <div>
                <ul style={{ listStyleType: "none", padding: 0 }}>
                    <li>
                        <NavLink exact to="/" activeStyle={{
                            fontWeight: "bold",
                            color: "red",
                            borderLeft: '5px solid red'
                        }}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/bubblegum" activeStyle={{
                            fontWeight: "bold",
                            color: "red",
                            borderLeft: '5px solid red'
                        }}> Bubblegum</NavLink>
                    </li>
                    <li>
                        <NavLink to="/rvhora" activeStyle={{
                            fontWeight: "bold",
                            color: "red",
                            borderLeft: '5px solid red'
                        }}>Rvhora</NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Navbar
