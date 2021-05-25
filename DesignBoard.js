import React from 'react'
import '../Styles.css'
import DesignPad from './DesignPad'


const DesignBoard = () => {

    return (
        <div className="flex-container">
            <div className="flex-container flex-wrap">
                <DesignPad />
                <DesignPad />
                <DesignPad />
                <DesignPad />
            </div>

        </div>
    )

}

export default DesignBoard