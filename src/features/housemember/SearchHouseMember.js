import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Segment, Form, Message, Header, Button, Dropdown, Table, Rating } from 'semantic-ui-react';




class SearchHouseMember extends Component {

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
            view: "none",
            buttonType: "NONE",

            houseMemberNo: "",

        }

        this.handleFormChange = this.handleFormChange.bind(this);
        this.handleButtonTypeChange = this.handleButtonTypeChange.bind(this);

        this.houseMemberNoChange = this.houseMemberNoChange.bind(this)

    }

    handleFormChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
        console.log(this.state);
    }


    handleButtonTypeChange(e) {
        this.setState({
            buttonType: e.target.value
        });
        console.log(this.state);
    }

    houseMemberNoChange(e){
        this.setState({
            houseMemberNo: parseInt(e.target.value)
        });
        console.log(this.state.houseMemberNo)
    }

    render() {
        return (
            <div>   
            <Grid>
            <Grid.Column
                floated="left"
                width={9}
            >
            </Grid.Column>
            <Grid.Column
                floated="right"
                width={5}
            >

            <div>
                <input type="number" name="houseMemberNo" placeholder="Input house member no" value={this.state.houseMemberNo} onChange={this.houseMemberNoChange}/>
            </div>

            </Grid.Column>
            </Grid>

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
                    this.state.houseMemberNo !== 0 && !this.state.houseMemberNo ? 
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
                                    {key.Office}
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
                    this.state.houseMembers.filter(housemem => housemem.legislatorId === this.state.houseMemberNo).map((key, index) => {
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

            </div>

        );
    }
}

export default SearchHouseMember;
