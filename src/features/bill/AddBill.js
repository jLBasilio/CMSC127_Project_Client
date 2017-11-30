import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Segment, Form, Message, Header, Button, TextArea, Dropdown } from 'semantic-ui-react';

const author = [


];

class AddBill extends Component {

    constructor(props){

        super(props)

        this.state = {

            title: "",
            billType: "",
            dateFiled: "",
            longTitle: "",
            scope: "",
            authorId: null,

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
            authorId: null,
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
                <b>Scope</b>
                <select name="scope" onChange={this.handleFormChange} value={this.state.scope}>
                    <option value="National">National</option>
                    <option value="Local">Local</option>
                </select>

                <b>Author</b>
                <select name="scope" onChange={this.handleFormChange} value={this.state.scope}>
                    <option value="National">National</option>
                    <option value="Local">Local</option>
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
