import {add, list, del, update, clear, updateAllDone} from '../constants/todoList'

function todoList(state = [], action) {
    const {type, payload} = action

    switch (type) {
        case list:        case updateAllDone:
            return payload
        case add:
            return [...state, payload]
        case del:
            return state.filter((item) => item.id !== payload)
        case update:
            return state.map((item) => {
                if (item.id === payload.id) {
                    return payload
                } else {
                    return item
                }
            })
        case clear:
            return state.filter((item) => item.done !== payload)
        default:
            return state
    }
}

export default todoList
