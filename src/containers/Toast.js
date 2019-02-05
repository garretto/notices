import { connect } from 'react-redux'
import React from 'react'
import Toast from '../components/Toast'
import { hideNote } from '../store/notification'

class ToastContainer extends React.Component {
    render() {
        let {text, type, hideNote} = this.props

        if (text === '') {
            return null
        }

        return (
            <Toast text={text} type={type} hide={hideNote} />
        )
    }

}

const mapStateToProps = state => ({
    text: state.notification.text,
    type: state.notification.type
})

export default connect(mapStateToProps, { hideNote })(ToastContainer)
