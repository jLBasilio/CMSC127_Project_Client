import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Segment, Form, Message, Header, Button, Table } from 'semantic-ui-react';

class UpdateSenator extends Component {
    componentDidMount(){
        fetch('http://localhost:3001/get-all-senators')
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            this.setState({ senators: result })
            console.log("Success fetch");
        })
        .catch((e) => {
            console.log(e);
        })
    }

    constructor(props) {

        super(props)

        this.state = {

            senators: [],
            legislatorId: "",
            userInputted: false,
            successedit: false,
            showFormsEdit: false,
            
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
        }

        this.handleFormChange = this.handleFormChange.bind(this);
        this.handleNumberChange = this.handleNumberChange.bind(this);
        this.handleFocusChange = this.handleFocusChange.bind(this);
        this.editSenatorByNo = this.editSenatorByNo.bind(this);
        this.retrieveSenators = this.retrieveSenators.bind(this);
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
        this.retrieveSenators();
    }

    retrieveSenators(e){
        fetch('http://localhost:3001/get-all-senators')
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            this.setState({ senators: result })
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

    editSenatorByNo(e){
		fetch(`http://localhost:3001/put-senator/${this.state.legislatorId}`, {
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
                senatePosition: this.state.senatePosition,
                directLine: this.state.directLine,
                trunkLine: this.state.trunkLine,
                email: this.state.email,
                website: this.state.website
			})
        });

        this.setState({userInputted: false, successedit: true})
        
    }


    render() {
        return (
            <div>
                <br/>
                <h4>Edit Senator by number</h4>
                    <input type="number" name="legislatorId" placeholder="Input legislatorId" value={this.state.legislatorId} onChange={this.handleNumberChange} onFocus={this.handleFocusChange}/>
                
                 <Table celled padded structured>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell textAlign="center">Legislator ID</Table.HeaderCell>
                        <Table.HeaderCell textAlign="center">First Name</Table.HeaderCell>
                        <Table.HeaderCell textAlign="center">Middle Initial</Table.HeaderCell>
                        <Table.HeaderCell textAlign="center">Last Name</Table.HeaderCell>
                        <Table.HeaderCell textAlign="center">Senate Position</Table.HeaderCell>
                        <Table.HeaderCell textAlign="center">Office</Table.HeaderCell>
                        <Table.HeaderCell textAlign="center">Direct Line</Table.HeaderCell>
                        <Table.HeaderCell textAlign="center">Trunk Line</Table.HeaderCell>
                        <Table.HeaderCell textAlign="center">Email</Table.HeaderCell>
                        <Table.HeaderCell textAlign="center">Website</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>

                {
                    this.state.legislatorId !== 0 && !this.state.legislatorId ? 
                    this.state.senators.map((key, index) => {
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
                                    {key.senatePosition}
                                </Table.Cell>
                                <Table.Cell>
                                    {key.directLine}
                                </Table.Cell>
                                <Table.Cell>
                                    {key.trunkLine}
                                </Table.Cell>
                                <Table.Cell>
                                    {key.email}
                                </Table.Cell>
                                <Table.Cell>
                                    {key.website}
                                </Table.Cell>
                            </Table.Row>
                        );
                    })  :
                    this.state.senators.filter(senator => senator.legislatorId === this.state.legislatorId).map((key, index) => {
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
                                    {key.senatePosition}
                                </Table.Cell>
                                <Table.Cell>
                                    {key.office}
                                </Table.Cell>
                                <Table.Cell>
                                    {key.directLine}
                                </Table.Cell>
                                <Table.Cell>
                                    {key.trunkLine}
                                </Table.Cell>
                                <Table.Cell>
                                    {key.email}
                                </Table.Cell>
                                <Table.Cell>
                                    {key.website}
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
                        <Form>
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
                            onClick={this.editSenatorByNo}
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
                    </Segment>
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

export default UpdateSenator;
