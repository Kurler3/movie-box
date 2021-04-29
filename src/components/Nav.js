import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome, faUserCircle, faCompass, faSearch, faTv } from '@fortawesome/free-solid-svg-icons'
import {Link, useHistory } from 'react-router-dom'
import { AuthenticationConsumer } from '../context/AuthenticationContext'

const Nav = (props) => {

    const [text, setText] = useState("");
    const history = useHistory();
    
    function onChangeText(e) {
        setText(e.target.value)
    }


    function submitHandler(event) {
        event.preventDefault()

        if(text!==''){
            // If current location is searching a different title then just replace the pathname instead of pushing
            if(history.location.pathname.includes('/search-results/')){
                history.replace(`/search-results/${text}`)
            }
            else {
                history.push(`search-results/${text}`)
            }
        }

        setText('');
    }
    return (
        <AuthenticationConsumer>

            {value => {
                return (
                <div className="nav-bar">
                <Link to="/" style={{textDecoration:'none'}}>
                    <h1><FontAwesomeIcon icon={faTv}/> Movie Box</h1>
                </Link>
                <div className="form-container">
                    <form className="nav-bar-search-form" onSubmit={submitHandler}>
                        <input type="text" name="" id="" placeholder="Search..." className="nav-bar-search-form-input" value={text} 
                        onChange={onChangeText}/>
                        <button className="nav-bar-search-form-submit">
                            {/* <Link to={`/search-results/${text}`} style={{textDecoration:'none'}} > */}
                                <FontAwesomeIcon icon={faSearch} />
                            {/* </Link> */}
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
