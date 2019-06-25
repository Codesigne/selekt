import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.handleinputchange = this.handleinputchange.bind(this)
        this.additem = this.additem.bind(this)
    }
    handleinputchange(event) {
        this.props.handleinputchange(event)
    }
    additem(event) {
        this.props.additem(event)
    }
    render() {
        return (
            <form className="form-inline p-2"  onSubmit={this.additem}>
                <label className="sr-only" htmlFor="inlineFormInputName2">Name</label>
                <input onChange={this.handleinputchange}
                    type="text"
                    className="form-control mb-2 mr-sm-2"
                    id="inlineFormInputName2"
                    name="msg"
                    value={this.props.msg}
                    placeholder="Message.." />
                <label className="sr-only" htmlFor="inlineFormInputGroupUsername2">Username</label>
                <select
                    onChange={this.handleinputchange}
                    className="custom-select mb-2 mr-sm-2"
                    id="inlineFormCustomSelectPref"
                    name="status"
                    value={this.props.status}
                >
                    <option value="success">Success</option>
                    <option value="warning">Warning</option>
                    <option value="error">Error</option>
                </select>
                <button
                    type="submit"
                    className="btn btn-primary mb-2">Submit</button>
            </form>
        );
    }
}

export default Header;
