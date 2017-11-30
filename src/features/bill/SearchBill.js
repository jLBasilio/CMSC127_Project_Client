import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Segment, Form, Message, Header, Button, Dropdown, Table, Rating } from 'semantic-ui-react';




class SearchBill extends Component {

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
            view: "all",
            buttonType: "All",

            searchBarYear: false,
            searchBy: "",
            selectedYear: "2017",

            searchBarLegislator: false,
            firstName: "",
            middleInitial: "",
            lastName: "",

            searchBarStatus: false,
            statusValue: "1",

            searchBarBillNo: false,
            billNo: 1,

        }

        this.handleFormChange = this.handleFormChange.bind(this);
        this.handleButtonTypeChange = this.handleButtonTypeChange.bind(this);
        this.handleSearchByChange = this.handleSearchByChange.bind(this);
        this.handleYearChange = this.handleYearChange.bind(this);
        this.handleLegislatorFormChange = this.handleLegislatorFormChange.bind(this);
        this.handleStatusChange = this.handleStatusChange.bind(this);
        this.handleBillNoChange = this.handleBillNoChange.bind(this);
        this.retrieveBillByYear = this.retrieveBillByYear.bind(this);
        this.retrieveBillByLegislator = this.retrieveBillByLegislator.bind(this);
        this.retrieveBillByStatus = this.retrieveBillByStatus.bind(this);
        this.retrieveBillByBillNo = this.retrieveBillByBillNo.bind(this);

    }

    handleFormChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
        console.log(this.state);
    }

    handleLegislatorFormChange(e) {
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

    handleYearChange(e) {
        this.setState({
            selectedYear: e.target.value
        });
        console.log(this.state);
    }

    handleStatusChange(e) {
        
        this.setState({
            statusValue: e.target.value
        });
        console.log(this.state);
    }

    handleBillNoChange(e) {
        
        this.setState({
            billNo: parseInt(e.target.value)
        });
        console.log(this.state);
    }

    handleSearchByChange(e) {

        e.target.value === "year" ? 
            this.setState({
                searchBy: e.target.value,
                searchBarLegislator: false,
                searchBarYear: true,
                searchBarStatus: false,
                searchBarBillNo: false,
                
            }) :
            e.target.value === "legislator" ? 
            this.setState({
                searchBy: e.target.value,
                searchBarLegislator: true,
                searchBarYear: false,
                searchBarStatus: false,
                searchBarBillNo: false,
            }) :
            e.target.value === "status" ?
            this.setState({
                searchBy: e.target.value,
                searchBarYear: false,
                searchBarLegislator: false,
                searchBarStatus: true,
                searchBarBillNo: false,
            }) :
            e.target.value === "billNo" ?
            this.setState({
                searchBy: e.target.value,
                searchBarYear: false,
                searchBarLegislator: false,
                searchBarStatus: false,
                searchBarBillNo: true,
            }) :
            console.log("");

        console.log(this.state);
    }

    retrieveBillByYear(e){
        fetch(`http://localhost:3001/get-bills-in/${this.state.selectedYear}`)
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            this.setState({ bills: result })
            console.log("Success fetching by year");
        })
        .catch((e) => {
            console.log(e);
        })
    }

    retrieveBillByLegislator(e){
        fetch(`http://localhost:3001/get-bills-by/${this.state.firstName}/${this.state.middleInitial}/${this.state.lastName}`)
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            this.setState({ bills: result })
            console.log("Success fetching by legislator");
        })
        .catch((e) => {
            console.log(e);
        })
    }

    retrieveBillByStatus(e){
        fetch(`http://localhost:3001/get-bills-passed/${this.state.statusValue}`)
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            this.setState({ bills: result })
            console.log("Success fetching by status");
        })
        .catch((e) => {
            console.log(e);
        })
    }

    retrieveBillByBillNo(e){
        fetch(`http://localhost:3001/get-bill/${this.state.billNo}`)
        .then((response) => {
            return response.json();
        })
        .then((result) => {
            this.setState({ bills: result })
            console.log("Success fetching by bill number");
        })
        .catch((e) => {
            console.log(e);
        })
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
            Bill Type: 
            <select name="buttonType" onChange={this.handleButtonTypeChange} value={this.state.buttonType}>
                <option value="All">All</option>
                <option value="SBN">SBN</option>
                <option value="HBN">HBN</option>
            </select>

            Search By: 
            <select name="searchBy" onChange={this.handleSearchByChange} value={this.state.searchBy}>
                <option value="legislator">Legislator</option>
                <option value="status">Status</option>
                <option value="year">Year</option>
                <option value="billNo">Bill No</option>
            </select>
            {
                this.state.searchBarYear ?
                <div>
                    <input type="number" name="year" placeholder="Input year" value={this.state.selectedYear} onChange={this.handleYearChange}/>
                    <Button
                        onClick={this.retrieveBillByYear}
                    >
                    Submit
                    </Button>
                </div>
                    :
                    this.state.searchBarLegislator ?
                    <div>
                        <input type="text" name="firstName" placeholder="Input first name" value={this.state.firstName} onChange={this.handleLegislatorFormChange}/>
                        <input type="text" name="middleInitial" placeholder="Input middle initial" value={this.state.middleInitial} onChange={this.handleLegislatorFormChange}/>
                        <input type="text" name="lastName" placeholder="Input last name" value={this.state.lastName} onChange={this.handleLegislatorFormChange}/>
                        <Button
                            onClick={this.retrieveBillByLegislator}
                        >
                        Submit
                        </Button>
                    </div>
                    :
                    this.state.searchBarStatus ?
                    <div>
                    <input type="radio" name="status" value="1" onClick={this.handleStatusChange}/>First Reading
                    <input type="radio" name="status" value="2" onClick={this.handleStatusChange}/>Second Reading
                    <input type="radio" name="status"  value="3" onClick={this.handleStatusChange}/>Third Reading
                        <Button
                            onClick={this.retrieveBillByStatus}
                        >
                        Submit
                        </Button>
                    </div>
                    :

                    this.state.searchBarBillNo ?
                    <div>
                    <input type="number" name="billNo" placeholder="Input bill no" value={this.state.billNo} onChange={this.handleBillNoChange}/>
                    <Button
                        onClick={this.retrieveBillByBillNo}
                    >
                    Submit
                    </Button>
                    </div>
                    :

                    console.log("")
            }
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
                    this.state.buttonType === "All" ? 
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
                    this.state.buttonType === "SBN" ? 
                    this.state.bills.filter(bill => bill.billType === "SBN").map((key, index) => {
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
                   })   :
                    this.state.bills.filter(bill => bill.billType === "HBN").map((key, index) => {
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

            </div>

        );
    }
}

export default SearchBill;
