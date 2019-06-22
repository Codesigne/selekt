import React from 'react';

class Header extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            txt: "",
            msgType:"",
        }
        this.handleinputchange = this.handleinputchange.bind(this)
        this.additem = this.additem.bind(this)
    }
    handleinputchange(event) {
        const { value, name } = event.target
        this.setState((state) => ({
            [name]: value
        }))
        this.props.handleinputchange(event)
    }
    additem(event) {
        event.preventDefault()
            this.setState(state => ({
                msgType: "success",
                txt: "",
            })
            );
            this.props.additem(event)
    }
    render() {
        return (
            <form className="form-inline p-2" >
                <label className="sr-only" htmlFor="inlineFormInputName2">Name</label>
                <input onChange={this.handleinputchange}
                    type="text"
                    className="form-control mb-2 mr-sm-2"
                    id="inlineFormInputName2"
                    name="txt"
                    value={this.state.txt}
                    placeholder="Message.." />
                <label className="sr-only" htmlFor="inlineFormInputGroupUsername2">Username</label>
                <select
                    onChange={this.handleinputchange}
                    className="custom-select mb-2 mr-sm-2"
                    id="inlineFormCustomSelectPref"
                    name="msgType"
                    value={this.state.msgType}
                >
                    <option defaultValue value="success">Success</option>
                    <option value="warning">Warning</option>
                    <option value="error">Error</option>
                </select>
                <button
                    type="button"
                    onClick={this.additem}
                    className="btn btn-primary mb-2">Submit</button>
            </form>
        );
    }
}

export default Header;
