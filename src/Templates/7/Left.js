import React from 'react'
import Skills from './Skills'
import Certification from './Certification'
import Education from './Education'
import Language from './Languages'

const Left = () => {
    return (<>
        <div style={{ backgroundColor: "#fce5cd" }}>
            <Education /><br />
            <Certification /> <br /></div>
        <Language /><br />
        <Skills /><br />
    </>
    )
}

export default Left
