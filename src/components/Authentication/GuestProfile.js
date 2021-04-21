import React from 'react'

const GuestProfile = () => {
    return (
        <div className="guest-profile-container">
            <div className="guest-profile-side-bar">
                <div className="guest-profile-side-bar-image">
                    {/* <img src="https://cdn.pixabay.com/photo/2017/11/08/22/28/camera-2931883_1280.jpg" alt="Profile Image"/> */}
                </div>
                <h3>Welcome Guest</h3>
                <p>Guest</p>
                <button className="guest-profile-side-bar-log-out-btn">
                    LOG OUT
                </button>
            </div>
            <div className="guest-profile-main">
                <div className="guest-profile-main-top-nav">
                    
                </div>
                <div className="guest-profile-main-body">

                </div>
            </div>
        </div>
    )
}

export default GuestProfile
