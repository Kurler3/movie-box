import React from 'react'

const Footer = () => {
    
    return (
        <div className="footer">
            <div className="footer-left-container">
                <div className="footer-nav-container">
                    <h1>Movie Box</h1>
                    <ul className="footer-nav-container-list">
                        <li className="footer-nav-container-list-item">Home</li>
                        <li className="footer-nav-container-list-item">Profile</li>
                        <li className="footer-nav-container-list-item">Discover</li>
                    </ul>
                </div>
                <div className="footer-left-container-phone-number-container">
                    <p>Phone Number:</p>
                    <p>13408654926</p>
                </div>
                <div className="footer-left-container-copyright-container">
                    <p>Copyright 2021</p>
                    <p>Code and Design by Miguel Bento</p>
                </div>
            </div>
            <div className="footer-right-container">
                <img src="https://camo.githubusercontent.com/3473ad272177937efdaea24da61c7a9204540ef4a3eccace1fed89403805191c/68747470733a2f2f7777772e7468656d6f76696564622e6f72672f6173736574732f322f76342f6c6f676f732f343038783136312d706f77657265642d62792d72656374616e676c652d677265656e2d626234333031633130646463373439623465373934363338313161363861666562656165363665663433643137626366643866663065363064656437636539392e706e67" alt="The Movie Database"/>
                <ul className="footer-right-container-list">
                    <li className="footer-right-container-list-item">
                        <div className="footer-right-container-list-item-container">
                            Twitter
                        </div>
                    </li>
                    <li className="footer-right-container-list-item">
                        <div className="footer-right-container-list-item-container">
                            Facebook
                        </div>
                    </li>
                    <li className="footer-right-container-list-item">
                        <div className="footer-right-container-list-item-container">
                            Instagram
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
