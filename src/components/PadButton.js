import React from 'react'
import '../Styles.css'

class PadButton extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            buttonColor: this.props.buttonColor
        }
    }

    onDrag = e => {
        e.dataTransfer.setData('buttonColor', this.state.buttonColor)
    }

    render() {
        return (
            <div
                style={{ backgroundColor: this.state.buttonColor }}
                className='padInputContainer'
                draggable='true'
                onDragStart={this.onDrag}>
                <div className='PadButton-text'>{this.props.text}</div>
            </div>
        )
    }
}

export default PadButton