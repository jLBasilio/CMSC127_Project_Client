import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Segment, Form, Message, Header, Button, Table } from 'semantic-ui-react';

class DeleteSenator extends Component {
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
            successdelete: false,

        }

        this.handleFormChange = this.handleFormChange.bind(this);
        this.handleFocusChange = this.handleFocusChange.bind(this);
        this.deleteSenatorByNo = this.deleteSenatorByNo.bind(this);
        this.retrieveSenators = this.retrieveSenators.bind(this);

    }

    handleFormChange(e) {

        this.setState({
            legislatorId: parseInt(e.target.value)
        });
        console.log(this.state);
    }

    handleFocusChange(e) {

        this.setState({
            successdelete: false
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

    deleteSenatorByNo(e){
		fetch(`http://localhost:3001/delete-senator/${this.state.legislatorId}`, {
			method: 'delete',
			headers: {
			    'Accept': 'application/json',
			    'Content-Type': 'application/json'
			},
			body: JSON.stringify({
                legislatorId: this.state.legislatorId
			})
        });

        this.setState({userInputted: false, successdelete: true})
        
    }


    render() {
        return (
            <div>
                <br/>
                <h4>Delete Bill by number</h4>
                    <input type="number" name="legislatorId" placeholder="Input legislatorId" value={this.state.legislatorId} onChange={this.handleFormChange} onFocus={this.handleFocusChange}/>
                
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
                    this.state.senators.filter(housemem => housemem.legislatorId === this.state.legislatorId).map((key, index) => {
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
                        onClick={this.deleteSenatorByNo}
                        color="red"
                    >DELETE SENATOR</Button>
                    :
                    console.log("")

                }

                {

                    this.state.successdelete ? 
                        <h2>Successfully deleted. </h2>
                        :
                        console.log("")
                }

            </div>
        );
    }
}

export default DeleteSenator;
