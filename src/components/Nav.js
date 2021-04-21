import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome, faUserCircle, faCompass, faSearch } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
import { AuthenticationConsumer } from '../context/AuthenticationContext'

const Nav = () => {

    const [text, setText] = useState("");
    
    function onChangeText(e) {
        setText(e.target.value)
    }

    return (
        <AuthenticationConsumer>

            {value => {
                return (
                <div className="nav-bar">
                <Link to="/" style={{textDecoration:'none'}}>
                    <h1>Movie Box</h1>
                </Link>
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
                        <Link to="/" style={{textDecoration:'none'}}>
                            <FontAwesomeIcon icon={faHome} style={{color:'white'}}/>
                        </Link>
                    </li>
                    
                    <li className="nav-bar-list-item">
                        <Link to={value.isLoggedIn ? '/profile/guest' : '/log-in'} style={{textDecoration:'none'}}>
                            <FontAwesomeIcon icon={faUserCircle} style={{color:'white'}}/>
                        </Link>
                    </li>
                    <li className="nav-bar-list-item">
                        <Link to="/discover" style={{textDecoration:'none'}}>
                            <FontAwesomeIcon icon={faCompass} style={{color:'white'}} />
                        </Link>
                    </li>
                </ul>
            </div>
                )
            }}
            
        </AuthenticationConsumer>
    )
}

export default Nav
