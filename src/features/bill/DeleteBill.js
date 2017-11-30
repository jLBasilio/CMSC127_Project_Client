import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Segment, Form, Message, Header, Button } from 'semantic-ui-react';

class DeleteBill extends Component {

    constructor(props) {

        super(props)

        this.state = {

            username: "",
            password: "",
            validAccount: null,

        }

        this.handleForm = this.handleForm.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleForm(e) {
        this.setState({
            [e.target.name]: e.target.value
        });

    }

    handleSubmit(e) {
        this.state.username === "admin" && this.state.password === "admin" ?
            this.setState({ validAccount: true }) :
            this.setState({ validAccount: false })
    }

    render() {
        return (
            <h2> Page for deleting bills</h2>
        );
    }
}

export default DeleteBill;