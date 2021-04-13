import React from 'react'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const LeftChevron = () => {
    return (
        <div className="right-chevron">
            <FontAwesomeIcon icon={faArrowLeft}/>
        </div>
    )
}

export default LeftChevron
