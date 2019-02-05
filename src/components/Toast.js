import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class TextTransformer extends Component {

    static propTypes = {
        type: PropTypes.oneOf(['error', 'success', 'pending']).isRequired,
        text: PropTypes.string.isRequired,
        hide: PropTypes.func.isRequired,
    }

    render() {
        const { type, text, hide } = this.props
        return (
            <div className={`Toast-container ${type}`}>
                {text}
                <button onClick={() => hide()} className="Toast-close">X</button>
            </div>
        )
    }
}