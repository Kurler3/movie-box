import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBookmark, faStar} from '@fortawesome/free-solid-svg-icons'
import {AuthenticationConsumer} from '../../context/AuthenticationContext'
import {Link} from 'react-router-dom'

const GuestProfile = () => {
    return (
        <AuthenticationConsumer>
            {value => {
                return (<div className="guest-profile-container">
                <div className="guest-profile-side-bar">
                    <div className="guest-profile-side-bar-image"></div>
                    <h3>Welcome Guest</h3>
                    <p>Guest</p>
                    <button className="guest-profile-side-bar-log-out-btn" onClick={() => value.logOff()}>
                        <Link to="/" style={{textDecoration:'none'}}>
                        LOG OUT
                        </Link>
                    </button>
                </div>
                <div className="guest-profile-main">
                    <div className="guest-profile-main-top-nav">
                        <div className="guest-profile-main-top-nav-container">
                            <div className="guest-profile-main-top-nav-container-icon-container">
                                <FontAwesomeIcon icon={faBookmark} />
                            </div>
                            <p>0 Favorite Movies</p>
                        </div>
                        <div className="guest-profile-main-top-nav-container">
                            <div className="guest-profile-main-top-nav-container-icon-container">
                                <FontAwesomeIcon icon={faBookmark} />
                            </div>
                            <p>0 Favorite TV Shows</p>
                        </div>
                        <div className="guest-profile-main-top-nav-container">
                            <div className="guest-profile-main-top-nav-container-icon-container">
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            <p>0 Rated Movies</p>
                        </div>
                        <div className="guest-profile-main-top-nav-container">
                            <div className="guest-profile-main-top-nav-container-icon-container">
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            <p>0 Rated TV Shows</p>
                        </div>
                    </div>
                    <div className="guest-profile-main-body">
                        <div className="guest-profile-main-body-content-container">
                            <h1>Favorite Movies</h1>
                            <div className="guest-profile-main-body-content-container-divider"></div>
                            <p>No favorite movies found</p>
                        </div>
                        <div className="guest-profile-main-body-content-container">
                            <h1>TV Shows</h1>
                            <div className="guest-profile-main-body-content-container-divider"></div>
                            <p>No favorite tv shows found</p>
                        </div>
                        <div className="guest-profile-main-body-content-container">
                            <h1>Movies Rated</h1>
                            <div className="guest-profile-main-body-content-container-divider"></div>
                            <p>No rated movies found</p>
                        </div>
                        <div className="guest-profile-main-body-content-container">
                            <h1>TV Shows Rated</h1>
                            <div className="guest-profile-main-body-content-container-divider"></div>
                            <p>No rated tv shows found</p>
                        </div>
                    </div>
                </div>
            </div>)
            }}

        </AuthenticationConsumer>
    )
}

export default GuestProfile
