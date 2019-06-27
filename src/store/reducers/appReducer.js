let initialState = {
    list: []
}

function headerReducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_ITEM":
            return {
                list: [
                    ...state.list,
                    action.payload
                ]
            }
            // break;
        case "REMOVE_LIST_ITEM":
            return {
                list: [
                    ...state.list.filter(item => {
                        return item.id !== action.payload.id
                    })
                ]
            }
            // break;

        default:
            return {
                list: [...state.list,]
            }
            // break;
    }
}
export default headerReducer;