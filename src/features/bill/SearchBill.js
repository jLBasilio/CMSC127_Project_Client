import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Segment, Form, Message, Header, Button, Dropdown, Table, Rating } from 'semantic-ui-react';



class SearchBill extends Component {

    constructor(props) {

        super(props)

        this.state = {

            view: "all",

        }

        this.handleFormChange = this.handleFormChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleFormChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
        console.log(this.state);

    }

    handleSubmit(e) {

    }

    render() {
        return (
            <h2>Page for searching bills</h2>

            

        );
    }
}

export default SearchBill;
