import React from 'react'
import ListItem from './ListItem'

class List extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // list: [ ...this.props.list
            //     // {
            //     //     id: 1,
            //     //     status: "success",
            //     //     msg: "listwarningwarningwarningwarningwarning",
            //     // },
            //     // {
            //     //     id: 2,
            //     //     status: "warning",
            //     //     msg: "warningwarningwarningwarningwarning",
            //     // }
            // ]
        }
        // this.removeListItem = this.removeListItem.bind(this)
    }

    // removeListItem(event) {
    //     let id = parseInt(event.target.dataset.itemkey)
    //     this.setState(state => ({
    //         ...state,
    //         list: this.state.list.filter(item => {
    //             return item.id !== id
    //         })
    //     }))
    // }
    renderListItems() {
        console.log(this.props);
        // return this.state.list.map(item => <ListItem
        return this.props.list.map(item => <ListItem
            {...item}
            key={item.id}
            removeListItem={this.props.removeListItem}
        ></ListItem>);
    }
    render() {
        return (
            this.renderListItems()
        )
    }
}

export default List;