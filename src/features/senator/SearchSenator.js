import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Segment, Form, Message, Header, Button, Dropdown, Table, Rating } from 'semantic-ui-react';




class SearchSenator extends Component {

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
            view: "none",
            buttonType: "NONE",

            senatorNo: "",

        }

        this.handleFormChange = this.handleFormChange.bind(this);
        this.handleButtonTypeChange = this.handleButtonTypeChange.bind(this);

        this.senatorNo = this.senatorNo.bind(this)

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

    senatorNo(e){
        this.setState({
            senatorNo: parseInt(e.target.value)
        });
        console.log(this.state.senatorNo)
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
                <input type="number" name="SenatorNo" placeholder="Input house member no" value={this.state.senatorNo} onChange={this.senatorNo}/>
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
                    this.state.senatorNo !== 0 && !this.state.senatorNo ? 
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
                    this.state.senators.filter(housemem => housemem.legislatorId === this.state.senatorNo).map((key, index) => {
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

            </div>

        );
    }
}

export default SearchSenator;
