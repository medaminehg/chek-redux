import {ADDITION,DELETE, EDIT, DONE} from  "./constants"
export const actions = (payload) => {
    return {
        type: ADDITION,
        payload
    }
}
export const actionsdelet = (payload) => {
    return {
        type: DELETE,
        payload
    }
}
export const actionsedit = (payload) => {
    return {
        type: EDIT,
        payload
    }
}
export const actionsdone = (payload) => {
    return {
        type: DONE,
        payload
    }
}