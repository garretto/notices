const DISPLAY_NOTE = 'DISPLAY_NOTE'
const HIDE_NOTE = 'HIDE_NOTE'
const HIDE_AFTER = 4000

export function showNote(text, type) {
    return (dispatch, getState) => {
        let state = getState().notification
        clearTimeout(state.timeout)
        let timeout = setTimeout(() => {
            dispatch(hideNote())
        }, HIDE_AFTER)

        dispatch({
            type: DISPLAY_NOTE,
            payload: {
                text,
                type,
                timeout,
            }
        })
    }
}

export function hideNote() {
    return (dispatch, getState) => {
        let state = getState().notification
        clearTimeout(state.timeout)
        dispatch({
            type: HIDE_NOTE,
        })
    }
}

const initialState = {
    text: '',
    type: '',
    timeout: null,
}

export default function textTransform(state = initialState, { type, payload }) {
    switch (type) {
        case DISPLAY_NOTE:
            return { ...state, text: payload.text, type: payload.type, timeout: payload.timeout }
        case HIDE_NOTE:
            return { ...state, text: '', type: '', timeout: null }
        default:
            return state
    }
}