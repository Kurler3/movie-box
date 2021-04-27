import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTv} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
import { AuthenticationConsumer } from '../../context/AuthenticationContext'

const LogIn = (props) => {

    
    return (
        <AuthenticationConsumer>

            {value => {
                return (
                    <div className="log-in-container">
                        <div className="log-in-container-text">
                            <h1><FontAwesomeIcon icon={faTv} /> Movie Box</h1>
                            <h3>Log In</h3>
                        </div>
                    <div className="log-in-container-buttons">
                        <button className="log-in-container-buttons-btn">
                            Log In
                        </button>
                    
                        <button className="log-in-container-buttons-btn" onClick={() => value.logIn()}>
                            <Link to="/profile/guest" style={{textDecoration:'none'}}>
                                Browse as Guest
                            </Link>
                        </button>
                
                        <p>Guest users have access to limited features</p>
                    </div>
                </div>
                )
            }}
            
        </AuthenticationConsumer>
    )
}

export default LogIn
