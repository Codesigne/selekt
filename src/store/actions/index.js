import type from './types'

export function ADD_ITEM(item) {
    console.log("in action  dfsdfsdf");
    return {
        type: type.ADD_ITEM,
        payload: {
            id: Date.now(),
            ...item
        }
    }
} 
export function REMOVE_LIST_ITEM(id) {
    console.log("in action  dfsdfsdf");
    return {
        type: type.REMOVE_LIST_ITEM,
        payload: {
            id
        }
    }
}
// export default ADD_ITEM;