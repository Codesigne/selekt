import React from 'react';
import './App.scss';
import ListItem from './components/LIstItem'
import Header from './components/Header'


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      msgType: "success",
      txt: "",
      netxId: 1,
      list: [
        // {
        //   id: 1,
        //   status: "success",
        //   txt: "sfsfsf"
        // },
        // {
        //   id: 2,
        //   status: "warning",
        //   txt: "sfsfsf"
        // },
        // {
        //   id: 3,
        //   status: "error",
        //   txt: "sfsfsf"
        // },
      ]
    }
    this.removeItem = this.removeItem.bind(this);
    this.addItem = this.addItem.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  };
  removeItem(t, e) {
    this.setState(state => ({
      list: state.list.filter((item) => {
        return item.id !== t
      })
    })
    );
  }
  handleInputChange(event) {
    const { value, name } = event.target
    this.setState(state => (
      {
        [name]: value
      }
    ))
  }
  addItem(event) {
    console.log(event);
    event.preventDefault()
    const { netxId, msgType, txt } = this.state;
    this.state.txt !== "" && this.state.msgType !== "" &&
      this.setState(state => ({
        netxId: 1 + this.state.netxId,
        msgType: "success",
        txt: "",
        list: [...this.state.list,
        {
          id: netxId,
          status: msgType,
          txt,
        }
        ]
      })
      );
  }
  renderList() {
    return this.state.list.map(
      (item, i) => {
        return (
          <div key={i}  >
            <ListItem
              {...item} 
              removeitem={this.removeItem}
            >
            </ListItem>
          </div>
        )
      }
    )
  }
  render() {
    return (
      <div className="App">
        <Header
          txt={this.txt}
          additem={this.addItem}
          handleinputchange={this.handleInputChange}
        ></Header>
        {this.renderList()}
      </div>
    );
  }
}

export default App;
