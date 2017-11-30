import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Segment, Form, Message, Header, Button, Dropdown, Table, Rating } from 'semantic-ui-react';


const data = [

    {
        billNo: 1,
        title: "Bill 1 Title",
        billType: "SBN",
        dateFiled: "nov 31, 2133",
        longTitle: "Bill 1 Longtitle",
        scope: "National",
        authorId: null,
        firstReading: "Passed",
        secondReading: "Passed",
        thirdReading: "Pending",
    },
    {
        billNo: 2,
        title: "Bill 53 Title",
        billType: "HBN",
        dateFiled: "nov 32, 2233",
        longTitle: "Bill 2 Longtitle",
        scope: "Local",
        authorId: null,
        firstReading: "Passed",
        secondReading: "Passed",
        thirdReading: "Pending",
    },
    {
        billNo: 3,
        title: "Bill 3 Title",
        billType: "HBN",
        dateFiled: "nov 33, 2333",
        longTitle: "Bill 3 Longtitle",
        scope: "Local",
        authorId: null,
        firstReading: "Pending",
        secondReading: "Pending",
        thirdReading: "Pending",
    },
    {
        billNo: 4,
        title: "Bill 4 Title",
        billType: "SBN",
        dateFiled: "nov 34, 2433",
        longTitle: "Bill 4 Longtitle",
        scope: "National",
        authorId: null,
        firstReading: "Passed",
        secondReading: "Pending",
        thirdReading: "Pending",
    },

];


class ViewBill extends Component {

    componentDidMount(){
        fetch('http://localhost:3001/get-bills')
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            this.setState({ bills: result })
        })
        .catch((e) => {
            console.log(e);
        })
    }


    constructor(props) {

        super(props)

        this.state = {
            
            bills: [],
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
            View By: 
            <select name="view" onChange={this.handleFormChange} value={this.state.view}>
                <option value="year">All</option>
                <option value="all">Year</option>
            </select>
            </Grid.Column>
            </Grid>

            <Table celled padded structured>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell rowSpan='2' textAlign="center">BillType</Table.HeaderCell>
                        <Table.HeaderCell rowSpan='2' textAlign="center">BillNo</Table.HeaderCell>
                        <Table.HeaderCell rowSpan='2' textAlign="center">Title</Table.HeaderCell>
                        <Table.HeaderCell rowSpan='2' textAlign="center">Long Title</Table.HeaderCell>
                        <Table.HeaderCell rowSpan='2' textAlign="center">Date Filed</Table.HeaderCell>
                        <Table.HeaderCell rowSpan='2' textAlign="center">Scope</Table.HeaderCell>
                        <Table.HeaderCell rowSpan='2' textAlign="center">Author</Table.HeaderCell>
                        <Table.HeaderCell colSpan='3' textAlign="center">Status</Table.HeaderCell>
                    </Table.Row>
                    <Table.Row>
                        <Table.HeaderCell>First Reading</Table.HeaderCell>
                        <Table.HeaderCell>Second Reading</Table.HeaderCell>
                        <Table.HeaderCell>Third Reading</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
               {
                    data.map( (key, index) => {
                        return(
                            <Table.Row>
                                <Table.Cell>
                                    {key.billType}
                                </Table.Cell>
                                <Table.Cell>
                                    {key.billNo}
                                </Table.Cell>
                                <Table.Cell>
                                    {key.title}
                                </Table.Cell>
                                <Table.Cell>
                                    {key.longTitle}
                                </Table.Cell>
                                <Table.Cell>
                                    {key.dateFiled}
                                </Table.Cell>
                                <Table.Cell>
                                    {key.scope}
                                </Table.Cell>
                                <Table.Cell>
                                    {key.authorId}
                                </Table.Cell>
                                <Table.Cell>
                                    {
                                        key.firstReading === "Passed" ? 
                                            "Approved" : "Pending"
                                    }
                                </Table.Cell>
                                <Table.Cell>
                                    {
                                        key.firstReading === "Passed" ?
                                            "Approved" : "Pending"
                                    }
                                </Table.Cell>
                                <Table.Cell>
                                    {
                                        key.firstReading === "Passed" ?
                                            "Approved" : "Pending"
                                    }
                                </Table.Cell>
                            </Table.Row>
                        );
                   })
               }
               </Table.Body>

            </Table>

            </div>

        );
    }
}

export default ViewBill;
