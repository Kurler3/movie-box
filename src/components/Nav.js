import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome, faUserCircle, faCompass, faSearch } from '@fortawesome/free-solid-svg-icons'

const Nav = () => {

    const [text, setText] = React.useState("");

    function onChangeText(e) {
        setText(e.target.value)
    }


    return (
        <div className="nav-bar">
            <h1>Movie Box</h1>
            <div className="form-container">
                <form className="nav-bar-search-form">
                    <input type="text" name="" id="" placeholder="Search..." className="nav-bar-search-form-input" value={text} 
                    onChange={onChangeText}/>
                    <button className="nav-bar-search-form-submit">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </form>
            </div>
            <ul className="nav-bar-list">
                <li className="nav-bar-list-item">
                    <FontAwesomeIcon icon={faHome} />
                </li>
                <li className="nav-bar-list-item">
                    <FontAwesomeIcon icon={faUserCircle}/>
                </li>
                <li className="nav-bar-list-item">
                    <FontAwesomeIcon icon={faCompass} />
                </li>
            </ul>
        </div>
    )
}

export default Nav
