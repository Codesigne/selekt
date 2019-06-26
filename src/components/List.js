import React from 'react'
import ListItem from './ListItem'

class List extends React.Component {
    renderListItems() {
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