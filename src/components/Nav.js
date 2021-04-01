import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Nav = () => {
    return (
        <div className="nav-bar">
            <h1>Movie Box</h1>
            <form className="nav-bar-search-form">
                <input type="text" name="" id="" placeholder="Search..."/>
                <input type="submit" className="nav-bar-search-form-submit"/>
            </form>
            <ul className="nav-bar-list">
                <li className="nav-bar-list-item">
                    <FontAwesomeIcon icon={["fas", "home"]} />
                </li>
                <li className="nav-bar-list-item">
                    <FontAwesomeIcon icon={["fas", "user-circle"]} />
                </li>
                <li className="nav-bar-list-item">
                    <FontAwesomeIcon icon={["fas", "compass"]} />
                </li>
            </ul>
        </div>
    )
}

export default Nav
