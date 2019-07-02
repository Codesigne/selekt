function headerReducer(state, action) {
    return {
        msg: "",
        msg_status: "success",
    }
} 
export default headerReducer;

export function getMsg(state) {
    return  state.header.msg
}
export function getMsgUppercase(state) {
    return  "HI" + state.header.msg  
}
export function getMsgStatus(state) {
    return  state.header.msg_status
}
