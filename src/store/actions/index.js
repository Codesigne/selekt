import type from './types'

export function ADD_ITEM(item) {
    console.log("in action  dfsdfsdf");
    return {
        type: type.ADD_ITEM,
        payload: {
            id:Date.now(),
            ...item
        }
    }
}
// export default ADD_ITEM;