import React from 'react'
import '../Styles.css'

class DesignPad extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            buttonColor: 'grey'
        }
    }

    allowDrop = e => {
        e.preventDefault()
    }

    drop = e => {
        e.preventDefault()
        const newColor = e.dataTransfer.getData('buttonColor')
        this.setState({ buttonColor: newColor })
    }

    render() {
        return (
            <div
                className='designPadButton'
                style={{ backgroundColor: this.state.buttonColor }}
                onDragOver={this.allowDrop}
                onDrop={this.drop}>
            </div>
        )
    }
}

export default DesignPad