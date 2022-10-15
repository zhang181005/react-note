import {change} from "../constants/filter";

function filter(state = 'all', action) {
    const {type, payload} = action
    switch (type) {
        case change:
            return payload
        default:
            return state
    }
}

export default filter
