import axios from 'axios'
import { showNote } from './notification'

const TRANSFORM_VALUE_LOAD = 'TRANSFORM_VALUE_LOAD'
const TRANSFORM_VALUE_SUCCESS = 'TRANSFORM_VALUE_SUCCESS'
const TRANSFORM_VALUE_ERROR = 'TRANSFORM_VALUE_ERROR'

const LOWERCASE_ENDPOINT = '/api/lowercase'
const UPPERCASE_ENDPOINT = '/api/uppercase'

const UPPERCASE = 'uppercase'
const LOWERCASE = 'lowercase'

const transformText = (input, mode = LOWERCASE) => dispatch => {
    mode = mode.toLowerCase()
    const endpoint = mode === UPPERCASE ? UPPERCASE_ENDPOINT : LOWERCASE_ENDPOINT

    dispatch({ type: TRANSFORM_VALUE_LOAD })
    dispatch(showNote(`Loading ${mode}`, 'pending'))
    axios.post(endpoint, { input })
        .then(res => {
            dispatch({ type: TRANSFORM_VALUE_SUCCESS, payload: res.data })
            dispatch(showNote(`Successfully loaded ${mode}`, 'success'))
        })
        .catch(err => {
            dispatch({ type: TRANSFORM_VALUE_ERROR, payload: err })
            dispatch(showNote(`Error loading ${mode}`, 'error'))
        })
}

export const transformToLowerCase = input => transformText(input)
export const transformToUpperCase = input => transformText(input, UPPERCASE)

const initialState = {
    transformedValue: '',
    isLoading: false,
    error: null
}

export default function textTransform(state = initialState, { type, payload }) {
    switch (type) {
        case TRANSFORM_VALUE_LOAD:
            return { ...state, isLoading: true, transformedValue: '' }
        case TRANSFORM_VALUE_SUCCESS:
            return { ...state, isLoading: false, transformedValue: payload.output }
        case TRANSFORM_VALUE_ERROR:
            return { ...state, isLoading: false, error: payload.message }
        default: return state
    }
}