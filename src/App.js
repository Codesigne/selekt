import React from 'react';
import './App.scss';

import List from './components/List'
import Header from './components/Header'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      msg: "",
      status: "success",
      list: []
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.addItem = this.addItem.bind(this);
    this.removeListItem = this.removeListItem.bind(this);
  }

  handleInputChange(event) {
    const { value, name } = event.target
    this.setState((state) => ({
      [name]: value
    }))
  }
  clearInput(state) {
    this.setState(
      state => ({
        msg: ""
      })
    )
  }
  addItem(event) {
    event.preventDefault();
    (this.state.msg !== "") &&
      (this.setState(state => {
        let { msg, status, list } = state;
        return { list: [...list, { id: Date.now(), msg, status }] }
      }, this.clearInput
      ))
  }
  removeListItem(event) {
    let id = parseInt(event.target.dataset.itemkey)
    this.setState(state => ({
      list: this.state.list.filter(item => {
        return item.id !== id
      })
    }))
  }
  render() {
    return (
      <>
        <Header
          handleinputchange={this.handleInputChange}
          additem={this.addItem}
          msg={this.state.msg}
          status={this.state.status}
        ></Header>
        <div className="p-2">
          <List list={this.state.list} removeListItem={this.removeListItem}></List>
        </div>
      </>
    );
  }
}

export default App;
