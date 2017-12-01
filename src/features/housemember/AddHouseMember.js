import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Segment, Form, Message, Header, Button, TextArea, Dropdown } from 'semantic-ui-react';



class AddHouseMember extends Component {

    constructor(props){

        super(props)

        this.state = {

            legislatorType: "House Member",
            firstName: "",
            middleInitial: "",
            lastName: "",
            office: "",
            province: "",
            district: "",
            directLine: "",
            phoneNo: "",
        }

        this.handleFormChange = this.handleFormChange.bind(this);
        this.handleResetForm = this.handleResetForm.bind(this);
        
        this.handleAddHouseMember = this.handleAddHouseMember.bind(this);
        this.addHouseMember = this.addHouseMember.bind(this);
    }
    
    handleFormChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleAddHouseMember(e){
        console.log("STATE:", this.state);
        this.addHouseMember();
    }

    handleResetForm(e){
        
        this.setState({

            legislatorType: "House Member",
            firstName: "",
            middleInitial: "",
            lastName: "",
            office: "",
            province: "",
            district: "",
            directLine: "",
            phoneNo: "",
            
        });

    }

    addHouseMember(e){
        console.log("adding");
        fetch('http://localhost:3001/add-house-member', {
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
                province: this.state.province,
                district: this.state.district,
                directLine: this.state.directLine,
                phoneNo: this.state.phoneNo
                
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
                    label='Province'
                    placeholder='Input province'
                    name='province'
                    value={this.state.province}
                    onChange={this.handleFormChange}
                />   
                <Form.Input
                    label='District'
                    placeholder='Input district'
                    name='district'
                    value={this.state.district}
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
                    label='Phone Number'
                    placeholder='Input phone no'
                    name='phoneNo'
                    value={this.state.phoneNo}
                    onChange={this.handleFormChange}
                />   
                <Button
                    color='teal'
                    type='button'
                    disabled={false}
                    onClick={this.handleAddHouseMember}
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

export default AddHouseMember;