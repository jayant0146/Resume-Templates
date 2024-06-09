import React from 'react'
import Certification from './Certification'
import Language from './Languages'
import Skills from './Skills'

const Right = () => {
    return (
        <div style={{ backgroundColor: "#eeeeee" }}>
            <Language /> <br /><br /><br />
            <Certification /> <br /><br /><br />
            <Skills /> <br /><br /><br />
        </div>
    )
}

export default Right
