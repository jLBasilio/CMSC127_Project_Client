import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Segment, Form, Message, Header, Button } from 'semantic-ui-react';

class DeleteBill extends Component {

    constructor(props) {

        super(props)

        this.state = {

            bills: [],
            billNoToBeDeleted: 0,

        }

        this.handleFormChange = this.handleFormChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDeleteBill = this.handleDeleteBill.bind(this);

    }

    handleFormChange(e) {
        this.setState({
            billNoToBeDeleted: e.target.value
        });

    }

    handleSubmit(e) {

    }

    render() {
        return (
            <h2> Page for deleting bills</h2>
        );
    }
}

export default DeleteBill;
