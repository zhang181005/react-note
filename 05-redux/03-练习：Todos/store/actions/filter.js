import {change} from "../constants/filter";

export const changeType = (type) => {
    return {
        type: change,
        payload: type
    }
}