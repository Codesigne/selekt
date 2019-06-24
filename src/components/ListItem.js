import React from 'react'

function ListItem(props) {
    return (
        <div className={`listItem white d-flex justify-content-between bg-white py-2 px-3 shadow-sm my-2 ${props.status}`}>
            <div className="listItem__body text-left d-flex flex-column justify-content-between ">
                <div className="listItem__status font-weight-bold"> {props.status} </div>
                <div className="text-black-50 listItem__msg" >  {props.msg} </div>
            </div>
            <button
                className="btn btn-link px-0 text-black-50"
                data-itemkey={props.id}
                onClick={props.removeListItem}>
                Dismiss
            </button>
        </div>
    )
}

export default ListItem;