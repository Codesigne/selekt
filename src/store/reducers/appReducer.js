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
            break;

        default:
            return {
                list: []
            }
            break;
    }






}
export default headerReducer;