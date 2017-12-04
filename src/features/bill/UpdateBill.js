import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Segment, Form, Message, Header, Button, Table } from 'semantic-ui-react';

class UpdateBill extends Component {

    componentDidMount(){
        fetch('http://localhost:3001/get-all-bills')
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            this.setState({ bills: result })
            console.log("Success fetch");
        })
        .catch((e) => {
            console.log(e);
        })
    }



    constructor(props) {

        super(props)

        this.state = {

            bills: [],
            billNo: "",
            userInputted: false,
            successEdit: false,
            showEdit: false,
            showFirstReading: true,
            showSecondReading: false,
            showThirdReading: false,

            title: "",
            longTitle: "",
            dateFiled: "",
            scope: "",
            firstReading: "",
            secondReading: "",
            thirdReading: "",
            

        }

        this.handleFormChange = this.handleFormChange.bind(this);
        this.handleResetForm = this.handleResetForm.bind(this);
        this.handleBillNoChange = this.handleBillNoChange.bind(this);
        this.handleScopeChange = this.handleScopeChange.bind(this);
        this.handleFocusChange = this.handleFocusChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleShowSecondReading = this.handleShowSecondReading.bind(this);
        this.handleShowThirdReading = this.handleShowThirdReading.bind(this);
        this.handlePassThirdReading = this.handlePassThirdReading.bind(this);
        this.handleShowEditForms = this.handleShowEditForms.bind(this);
        this.handleSubmitForm = this.handleSubmitForm.bind(this);
        this.getBillByNo = this.getBillByNo.bind(this);
        this.editBillByNo = this.editBillByNo.bind(this);

    }

    handleShowSecondReading(e){

        e.target.value === "true" ?
        this.setState({
            showSecondReading: true,
            firstReading: "Passed"
        }) :
        this.setState({
            showSecondReading: false,
            firstReading: "Pending"
        })    
        console.log(this.state);

    }

    handleShowThirdReading(e){

        e.target.value === "true" ?
        this.setState({
            showThirdReading: true,
            secondReading: "Passed"
        }) :
        this.setState({
            showThirdReading: false,
            secondReading: "Pending"
        })    
        console.log(this.state);
    }

    handlePassThirdReading(e){

        e.target.value === "true" ?
        this.setState({
            thirdReading: "Passed"
        }) :
        this.setState({
            thirdReading: "Pending"
        })    
        console.log(this.state);
    }

    handleBillNoChange(e) {

        const billNoFromUser = parseInt(e.target.value);
        e.target.value && billNoFromUser < this.state.bills.length ?
            this.setState({ 
                billNo: billNoFromUser,
                title: this.state.bills[billNoFromUser-1].title,
                longTitle: this.state.bills[billNoFromUser-1].longTitle,
                dateFiled: this.state.bills[billNoFromUser-1].dateFiled,
                scope: this.state.bills[billNoFromUser-1].scope,
                firstReading: this.state.bills[billNoFromUser-1].firstReading,
                secondReading: this.state.bills[billNoFromUser-1].secondReading,
                thirdReading: this.state.bills[billNoFromUser-1].thirdReading,
                userInputted: true,

            }) :
            this.setState({
                billNo: billNoFromUser,
                userInputted: true,
            })
        console.log(this.state);
    }

    handleFormChange(e) {

        this.setState({
            [e.target.name]: e.target.value
        });
        console.log(this.state);
    }

    handleDateChange(e) {

        this.setState({
            dateFiled: e.target.value
        });
        console.log(this.state);
    }

    handleScopeChange(e) {

        this.setState({
            scope: e.target.value
        });
        console.log(this.state);
    }

    handleResetForm(e) {

        this.setState({
            title: "",
            longTitle: "",
            dateFiled: "",
            scope: "",
            firstReading: "",
            secondReading: "",
            thirdReading: "",

            showSecondReading: false,
            showThirdReading: false
        });
        console.log(this.state);
    }

    handleFocusChange(e) {

        this.setState({
            successEdit: false,
            showEdit: false,
        });
        console.log(this.state);
    }

    handleShowEditForms(e) {

        this.setState({
            showEdit: true
        });
        console.log(this.state);
    }

    handleSubmitForm(e) {
        console.log(this.state);
        this.editBillByNo();
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


    editBillByNo(e){
		fetch(`http://localhost:3001/put-bill/${this.state.billNo}`, {
			method: 'put',
			headers: {
			    'Accept': 'application/json',
			    'Content-Type': 'application/json'
			},
			body: JSON.stringify({
                title: this.state.title,
                dateFiled: this.state.dateFiled,
                longTitle: this.state.longTitle,
                scope: this.state.scope,
                firstReading: this.state.firstReading,
                secondReading: this.state.secondReading,
                thirdReading: this.state.thirdReading
			})
		})

        this.setState({bills: [], userInputted: false, successEdit: true, showEdit: false})
        
    }

    render() {
        return (
            <div>
                <br/>
                <Grid centered textAlign="center" verticalAlign="middle">
                    <Grid.Column
                        
                    >
                    <h2 style={{color: "teal"}}>Update Bill By Nnumber</h2>
                        <Form.Input 
                            type="number"
                            placeholder='Bill number to be edited' 
                            name='billNo' 
                            value={this.state.billNo}
                            onChange={this.handleBillNoChange}
                            onFocus={this.handleFocusChange}
                        />
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
                    this.state.billNo !== 0 && !this.state.billNo ? 
                    this.state.bills.map((key, index) => {
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
                    })  :
                    this.state.bills.filter(bill => bill.billNo === this.state.billNo).map((key, index) => {
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


                {
                    this.state.billNo !== 0 && this.state.billNo ?
                    <Button 
                        onClick={this.handleShowEditForms}
                        color="teal"
                    >EDIT</Button>
                    :
                    console.log("")

                }

                {
                    this.state.showEdit ?
                    <Segment>
                        <Form>
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
                            <select name="scope" onChange={this.handleScopeChange} value={this.state.scope}>
                                <option value="" disabled>Select Scope</option>
                                <option value="National">National</option>
                                <option value="Local">Local</option>
                            </select>
                            <br />
                            <b>Date Filed</b>
                            <br />
                            <input 
                                type="date"
                                name="date"
                                value={this.state.dateFiled}
                                onChange={this.handleDateChange}
                                />
                            <br />
                            <br />
                            <b>First Reading Status:</b>
                            <br />
                            Approved 
                            <input 
                                type="radio"
                                name="showFirstReading"
                                value="true"
                                onClick={this.handleShowSecondReading}
                            />
                            Pending 
                            <input 
                                type="radio"
                                name="showFirstReading"
                                value="false"
                                onClick={this.handleShowSecondReading}
                            />
                            <br /> 
                            {
                                this.state.showSecondReading ? 
                                (<div>
                                    <b>Second Reading Status:</b>
                                    <br />
                                    Approved 
                                    <input 
                                        type="radio"
                                        name="showSecondReading"
                                        value={true}
                                        onClick={this.handleShowThirdReading}
                                    />
                                    Pending 
                                    <input 
                                        type="radio"
                                        name="showSecondReading"
                                        value={false}
                                        onClick={this.handleShowThirdReading}
                                    />
                                </div>) :
                                console.log("")
                            }
                            {
                                this.state.showThirdReading ? 
                                <div>
                                    <b>Third Reading Status:</b>
                                    <br />
                                    Approved 
                                    <input 
                                        type="radio"
                                        name="showThirdReading"
                                        value="true"
                                        onClick={this.handlePassThirdReading}
                                    />
                                    Pending 
                                    <input 
                                        type="radio"
                                        name="showThirdReading"
                                        value="false"
                                        onClick={this.handlePassThirdReading}
                                    />
                                </div> :
                                console.log("")
                            }

                            <Button
                                color='teal'
                                type="button"
                                disabled={false}
                                onClick={this.handleSubmitForm}
                                
                            >
                                Submit
                        </Button>
                            <Button
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
                    this.state.successEdit ? 
                        <h2>Successfully Edited.</h2>
                        :
                        console.log("")
                }

            </div>
        );
    }
}

export default UpdateBill;
