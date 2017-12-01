import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Segment, Form, Message, Header, Button, TextArea, Dropdown } from 'semantic-ui-react';



class AddSenator extends Component {
    constructor(props){

        super(props)

        this.state = {

            legislatorType: "Senator",
            firstName: "",
            middleInitial: "",
            lastName: "",
            office: "",
            senatePosition: "",
            directLine: "",
            trunkLine: "q1",
            email: "",
            website: "",

        }

        this.handleFormChange = this.handleFormChange.bind(this);
        
        this.handleAddSenator = this.handleAddSenator.bind(this);
        this.handleResetForm = this.handleResetForm.bind(this);
        this.addSenator = this.addSenator.bind(this);
    }
    
    handleFormChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }


    handleAddSenator(e){
        console.log("STATE:", this.state);
        this.addSenator();
    }

    handleResetForm(e){
        
        this.setState({

            legislatorType: "Senator",
            firstName: "",
            middleInitial: "",
            lastName: "",
            office: "",
            senatePosition: "",
            directLine: "",
            trunkLine: "",
            email: "",
            website: "",
            
        });

    }

    addSenator(e){
        console.log("adding");
        fetch('http://localhost:3001/add-senator', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                legislatorType: this.state.legislatorType,
                firstName: this.state.firstName,
                middleInitial: this.state.middleInitial,
                lastName: this.state.lastName,
                office: this.state.office,
                senatePosition: this.state.senatePosition,
                directLine: this.state.directLine,
                trunkLine: this.state.trunkLine,
                email: this.state.email,
                website: this.state.website
            })
        });
    }

    render() {
        return (
            <Segment>
            <Form >
                <Form.Group widths='equal'>

                 <Form.Input
                        label='Name'
                        placeholder='First Name'
                        name='firstName'
                        value={this.state.firstName}
                        onChange={this.handleFormChange}
                 />
                <Form.Input
                    label="Middle Initial"
                    placeholder='Middle Initial'
                    name='middleInitial'
                    value={this.state.middleInitial}
                    onChange={this.handleFormChange}
                />
                <Form.Input
                    label='Last Name'
                    placeholder='Last Name'
                    name='lastName'
                    value={this.state.lastName}
                    onChange={this.handleFormChange}
                />
                </Form.Group>
                <Form.Input
                    label='Office'
                    placeholder='Input office'
                    name='office'
                    value={this.state.office}
                    onChange={this.handleFormChange}
                />   
                <Form.Input
                    label='Senate Position'
                    placeholder='Input position'
                    name='senatePosition'
                    value={this.state.senatePosition}
                    onChange={this.handleFormChange}
                />   
                <Form.Input
                    label='Direct Line'
                    placeholder='Input direct line'
                    name='directLine'
                    value={this.state.directLine}
                    onChange={this.handleFormChange}
                />   
                <Form.Input
                    label='Trunk Line'
                    placeholder='Input trunk line'
                    name='trunkLine'
                    value={this.state.trunkLine}
                    onChange={this.handleFormChange}
                />   
                <Form.Input
                    label='Email'
                    placeholder='Input email'
                    name='email'
                    value={this.state.email}
                    onChange={this.handleFormChange}
                />   
                <Form.Input
                    label='Website'
                    placeholder='Input website'
                    name='website'
                    value={this.state.website}
                    onChange={this.handleFormChange}
                />   
                <Button
                    color='teal'
                    type='button'
                    disabled={false}
                    onClick={this.handleAddSenator}
                >
                    Submit
                </Button>
                <Button
                    type='button'
                    onClick={this.handleResetForm}
                >
                    Clear Fields
                </Button>
                
            </Form>
          </Segment >
        );
    }
}

export default AddSenator;