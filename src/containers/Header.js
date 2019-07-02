import { connect } from 'react-redux'
import Header from '../components/Header'

function mapStateToProps(state, ownProps) {
    return {
        msg: state.header.msg,
        status: state.header.status,
    }
}

export default connect(mapStateToProps)(Header)
