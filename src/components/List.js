import React from 'react'
import ListItem from './ListItem'

class List extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [
                {
                    id: 1,
                    status: "success",
                    msg: "warningwarningwarningwarningwarning",
                },
                {
                    id: 2,
                    status: "warning",
                    msg: "warningwarningwarningwarningwarning",
                }
            ]
        }
        this.removeListItem = this.removeListItem.bind(this)
    }
    renderListItems() {
        return this.state.list
            .map(item => <ListItem
                {...item}
                key={item.id}
                removeListItem={this.removeListItem}></ListItem>);
    }
    removeListItem(event) {
        let id = parseInt(event.target.dataset.itemkey)
        this.setState(state => ({
            ...state,
            list: this.state.list.filter(item => {
                return item.id !== id
            })
        }))
    }
    render() {
        return (
            this.renderListItems()
        )
    }
}

export default List;