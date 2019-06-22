import React from 'react';

function LIstItem(props) {
    return (
        <div className="px-2">
            <div className={`mx-auto listItem d-flex justify-content-between m-2  shadow-sm px-3 pt-2 pb-2 bg-white ${props.status} `}>
                <div className="text-left d-flex flex-column justify-content-between ">
                    <div className="status font-weight-bold text-capitalize " > {props.status} </div>
                    <div> {props.txt} </div>
                </div>
                <button className="align-self-center text-black-50 btn btn-link p-0" onClick={props.removeitem.bind(this, props.id)}>Dismiss</button>
            </div>
        </div>
    );
}

export default LIstItem;
