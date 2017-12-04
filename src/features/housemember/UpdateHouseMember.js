import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Segment, Form, Message, Header, Button, Table } from 'semantic-ui-react';

class UpdateHouseMember extends Component {
    componentDidMount(){
        fetch('http://localhost:3001/get-all-house-members')
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            this.setState({ houseMembers: result })
            console.log("Success fetch");
        })
        .catch((e) => {
            console.log(e);
        })
    }

    constructor(props) {

        super(props)

        this.state = {

            houseMembers: [],
            legislatorId: "",
            userInputted: false,
            successedit: false,
            showFormsEdit: false,
            
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
        this.handleNumberChange = this.handleNumberChange.bind(this);
        this.handleFocusChange = this.handleFocusChange.bind(this);
        this.editHouseMemberByNo = this.editHouseMemberByNo.bind(this);
        this.retrieveHouseMembers = this.retrieveHouseMembers.bind(this);
        this.showForms = this.showForms.bind(this);

    }

    handleFormChange(e) {

        this.setState({
            [e.target.name]: e.target.value
        });
        console.log(this.state);
    }

    handleNumberChange(e) {

        this.setState({
            legislatorId: parseInt(e.target.value)
        });
        console.log(this.state);
    }

    handleFocusChange(e) {

        this.setState({
            successedit: false
        });
        console.log(this.state);
        this.retrieveHouseMembers();
    }

    retrieveHouseMembers(e){
        fetch('http://localhost:3001/get-all-house-members')
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            this.setState({ houseMembers: result })
            console.log("Success fetch");
        })
        .catch((e) => {
            console.log(e);
        })
    }

    showForms(e){

        this.setState({

            showFormsEdit: true,

        })

    }

    editHouseMemberByNo(e){
		fetch(`http://localhost:3001/put-house-member/${this.state.legislatorId}`, {
			method: 'put',
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

        this.setState({userInputted: false, successedit: true})
        
    }


    render() {
        return (
            <div>
                <br/>
                <h2 style={{color: "teal"}}>Edit House Member By Number</h2>
                    <input type="number" name="legislatorId" placeholder="Input legislatorId" value={this.state.legislatorId} onChange={this.handleNumberChange} onFocus={this.handleFocusChange}/>
                
                 <Table celled padded structured>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell textAlign="center">Legislator ID</Table.HeaderCell>
                        <Table.HeaderCell textAlign="center">First Name</Table.HeaderCell>
                        <Table.HeaderCell textAlign="center">Middle Initial</Table.HeaderCell>
                        <Table.HeaderCell textAlign="center">Last Name</Table.HeaderCell>
                        <Table.HeaderCell textAlign="center">Office</Table.HeaderCell>
                        <Table.HeaderCell textAlign="center">Province</Table.HeaderCell>
                        <Table.HeaderCell textAlign="center">District</Table.HeaderCell>
                        <Table.HeaderCell textAlign="center">Direct Line</Table.HeaderCell>
                        <Table.HeaderCell textAlign="center">Phone Number</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>

                {
                    this.state.legislatorId !== 0 && !this.state.legislatorId ? 
                    this.state.houseMembers.map((key, index) => {
                        return(
                            <Table.Row>
                                <Table.Cell>
                                    {key.legislatorId}
                                </Table.Cell>
                                <Table.Cell>
                                    {key.firstName}
                                </Table.Cell>
                                <Table.Cell>
                                    {key.middleInitial}
                                </Table.Cell>
                                <Table.Cell>
                                    {key.lastName}
                                </Table.Cell>
                                <Table.Cell>
                                    {key.office}
                                </Table.Cell>
                                <Table.Cell>
                                    {key.province}
                                </Table.Cell>
                                <Table.Cell>
                                    {key.district}
                                </Table.Cell>
                                <Table.Cell>
                                    {key.directLine}
                                </Table.Cell>
                                <Table.Cell>
                                    {key.phoneNo}
                                </Table.Cell>
                            </Table.Row>
                        );
                    })  :
                    this.state.houseMembers.filter(housemem => housemem.legislatorId === this.state.legislatorId).map((key, index) => {
                        return(
                            <Table.Row>
                                <Table.Cell>
                                    {key.legislatorId}
                                </Table.Cell>
                                <Table.Cell>
                                    {key.firstName}
                                </Table.Cell>
                                <Table.Cell>
                                    {key.middleInitial}
                                </Table.Cell>
                                <Table.Cell>
                                    {key.lastName}
                                </Table.Cell>
                                <Table.Cell>
                                    {key.office}
                                </Table.Cell>
                                <Table.Cell>
                                    {key.province}
                                </Table.Cell>
                                <Table.Cell>
                                    {key.district}
                                </Table.Cell>
                                <Table.Cell>
                                    {key.directLine}
                                </Table.Cell>
                                <Table.Cell>
                                    {key.phoneNo}
                                </Table.Cell>
                            </Table.Row>
                        );
                    }
                    )
            
                }
                </Table.Body>

            </Table>

                {
                    this.state.legislatorId !== 0 && this.state.legislatorId ?
                    <Button 
                        onClick={this.showForms}
                        color="teal"
                    >EDIT</Button>
                    :
                    console.log("")

                }

                {
                    this.state.showFormsEdit ?
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
                    onClick={this.editHouseMemberByNo}
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
                    :
                    console.log("") 
                }

                {

                    this.state.successedit ? 
                        <h2>Successfully edited. </h2>
                        :
                        console.log("")
                }

            </div>
        );
    }
}

export default UpdateHouseMember;
