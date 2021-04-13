import React from 'react'
import {faArrowRight} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const LeftChevron = () => {
    return (
        <div className="left-chevron">
            <FontAwesomeIcon icon={faArrowRight}/>
        </div>
    )
}

export default LeftChevron
