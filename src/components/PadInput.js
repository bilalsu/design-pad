import React from 'react'
import PadButton from './PadButton'
import '../Styles.css'


const PadInput = () => {
    const colors = ['brown', 'blue', 'purple', 'pink', 'red', 'orange', 'gold', 'silver']

    return (
        <div className="PadInput-Container">
            <div className='PadInput'>
                {colors.map((color) => (
                    <PadButton text={color} buttonColor={color} />
                ))}
            </div>
        </div>
    )
}

export default PadInput