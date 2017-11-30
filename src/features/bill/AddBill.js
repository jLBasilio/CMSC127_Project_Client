import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Segment, Form, Message, Header, Button, TextArea, Dropdown } from 'semantic-ui-react';
import axios from 'axios';



class AddBill extends Component {

    componentDidMount(){
        fetch('http://localhost:3001/get-authors')
        .then((response) => {
            return response.json();
        })
        .then((result) =>{
            this.setState({authorList: result})
            console.log("Success fetching");
        })
        .catch((e) =>{
            console.log(e);
        })
    }

    constructor(props){

        super(props)

        this.state = {

            title: "",
            billType: "",
            dateFiled: "",
            longTitle: "",
            scope: "",
            authorList: [],
            selectedAuthor: "",
        }

        this.handleFormChange = this.handleFormChange.bind(this);
        this.handleSubmitForm = this.handleSubmitForm.bind(this);
        this.handleResetForm = this.handleResetForm.bind(this);

    }
    
    handleFormChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleAuthorChange(e){
        this.setState({
            selectedAuthor: e.target.value
        });
    }

    handleSubmitForm(e){
        console.log(this.state);
    }

    handleResetForm(e){
        
        console.log(this.state);
        this.setState({

            title: "",
            billType: "",
            dateFiled: "",
            longTitle: "",
            scope: "",
        });

    }

    render() {
        return (
            <Segment>
            <Form onSubmit={this.handleSubmitForm}>
                <Form.Group widths='equal'>
                    <Form.Input
                        label='Title'
                        placeholder='Bill Title'
                        name='title'
                        value={this.state.title}
                        onChange={this.handleFormChange}
                    />
                    <Form.Input
                        label='Long Title'
                        placeholder='Long Title of Bill'
                        name='longTitle'
                        value={this.state.longTitle}
                        onChange={this.handleFormChange}
                    />
                </Form.Group>
                <b>Bill Type</b>
                <select name="billType" onChange={this.handleFormChange} value={this.state.billType}>
                    <option value="HBN">HBN</option>
                    <option value="SBN">SBN</option>
                </select>
                <br />
                <b>Scope</b>
                <select name="scope" onChange={this.handleFormChange} value={this.state.scope}>
                    <option value="National">National</option>
                    <option value="Local">Local</option>
                </select>
                <br />
                <b>Author</b>
                <select name="author" onChange={this.handleAuthorChange} value={this.state.selectedAuthor}>
                    {
                        this.state.authorList.map((key, index) => {
                            return(
                                <option value={key.firstName}>{key.firstName}</option>
                            );
                        })
                    }
                </select>
                <Button
                    color='teal'
                    type='submit'
                    disabled={false
                    }
                >
                    Submit
            </Button>
                <Button
                    type='reset'
                    onClick={this.handleResetForm}
                >
                    Clear Fields
            </Button>
            </Form>
          </Segment >
        );
    }
}

export default AddBill;
