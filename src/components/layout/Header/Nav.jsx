import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Nav() {
    return (
        <nav>
            <ul className='list-group'>
                <li className='list-group-item'>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li className='list-group-item'>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li className='list-group-item'>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Nav