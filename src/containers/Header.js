import { connect } from 'react-redux'
import Header from '../components/Header'
import {getMsg, getMsgUppercase, getMsgStatus } from '../store/reducers/headerReducer'
function mapStateToProps(state, ownProps) {
    return {
        msg: getMsg(state),
        status: getMsgStatus(state),
        status_1: getMsgUppercase(state),
    }
}

export default connect(mapStateToProps)(Header)
