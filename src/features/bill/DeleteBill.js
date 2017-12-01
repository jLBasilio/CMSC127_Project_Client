import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Segment, Form, Message, Header, Button, Table } from 'semantic-ui-react';

class DeleteBill extends Component {

    constructor(props) {

        super(props)

        this.state = {

            bills: [],
            billNo: 0,
            userInputted: false,
            successdelete: false,

        }

        this.handleFormChange = this.handleFormChange.bind(this);
        this.handleFocusChange = this.handleFocusChange.bind(this);
        this.getBillByNo = this.getBillByNo.bind(this);
        this.deleteBillByNo = this.deleteBillByNo.bind(this);

    }

    handleFormChange(e) {

        this.setState({
            billNo: parseInt(e.target.value)
        });
        console.log(this.state);
    }

    handleFocusChange(e) {

        this.setState({
            successdelete: false
        });
        console.log(this.state);
    }

    getBillByNo(e){
        fetch(`http://localhost:3001/get-bill/${this.state.billNo}`)
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            this.setState({ bills: result, userInputted: true })
            console.log("Success fetching by bill number");
        })
        .catch((e) => {
            console.log(e);
        })
    }

    deleteBillByNo(e){
		fetch(`http://localhost:3001/delete-bill/${this.state.billNo}`, {
			method: 'delete',
			headers: {
			    'Accept': 'application/json',
			    'Content-Type': 'application/json'
			},
			body: JSON.stringify({
                billNo: this.state.billNo
			})
        });

        this.setState({bills: [], userInputted: false, successdelete: true})
        
    }


    render() {
        return (
            <div>
                <br/>
                <h4>Delete Bill by number</h4>
                <Form.Input 
                    type="number"
                    placeholder='Bill number to be deleted' 
                    name='billNo' 
                    value={this.state.billNo}
                    onChange={this.handleFormChange}
                    onFocus={this.handleFocusChange}
                />
                <Button 
                    onClick={this.getBillByNo}
                    color="red"
                >
                    DELETE BILL
                </Button>
                
                {
                    this.state.userInputted  ?
                    <div>
                    <Table celled structured>
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
                            { this.state.bills.map((key, index) => {
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
                                            {key.firstName + " " + key.middleInitial + " " + key.lastName}
                                        </Table.Cell>
                                        <Table.Cell>
                                            {
                                                key.firstReading

                                            }
                                        </Table.Cell>
                                        <Table.Cell>
                                            {
                                                key.secondReading 
                                            }
                                        </Table.Cell>
                                        <Table.Cell>
                                            {
                                                key.thirdReading
                                            }
                                        </Table.Cell>
                                    </Table.Row>
                                );
                            }) 
                        }
                    </Table.Body>
                </Table>

                <Button 
                    onClick={this.deleteBillByNo}
                    color="red"
                    >
                    CLICK TO CONFIRM DELETE
                </Button>

                </div>
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

export default DeleteBill;
