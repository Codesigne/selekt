import React from 'react';
import './App.scss';

import List from './components/List'
import Header from './containers/Header'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import  * as action  from './store/actions/index'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: []
    }
    this.addItem = this.addItem.bind(this);
    this.removeListItem = this.removeListItem.bind(this);
  }
  addItem(item) {
    console.log("app additem", item);
    (item.msg !== "") && (
      this.props.ADD_ITEM(item))
  }
  removeListItem(event) {
    let id = parseInt(event.target.dataset.itemkey)
    this.props.REMOVE_LIST_ITEM(id)
  }
  render() {
    return (
      <>
        <Header
          handleinputchange={this.handleInputChange}
          additem={this.addItem}
          // additem={this.ADD_ITEM}
          msg={this.state.msg}
          status={this.state.status}
        >
        </Header>
        <div className="p-2">
          {
            console.log(this.props.list)
          }
          <List list={this.props.list} removeListItem={this.removeListItem}>
          </List>
        </div>
      </>
    );
  }
}

// export default App;
function mapStateToProps(state, ownProps) {
  return {
    list: state.app.list
    // list: state.app.selectList(state)
  }
}
function mapDispatchToProps(dispatch, ownProps) {
  return bindActionCreators(
    {
     ...action
    },
    dispatch
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
