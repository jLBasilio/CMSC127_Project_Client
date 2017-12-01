import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Segment, Form, Message, Header, Button, TextArea, Dropdown } from 'semantic-ui-react';
import axios from 'axios';



class AddBill extends Component {

    componentDidMount(){
        fetch('http://localhost:3001/get-authors')
        .then((response) => {
            return response.json();
        })
        .then((result) =>{
            this.setState({authorList: result})
            console.log("Success fetching");
        })
        .catch((e) =>{
            console.log(e);
        })
    }

    constructor(props){

        super(props)

        this.state = {

            authorList: [],
            selectedAuthor: "",

            title: "",
            billType: "",
            dateFiled: "",
            longTitle: "",
            scope: "",

            firstName: "",
            middleInitial: "",
            lastName: "",


            
        }

        this.handleFormChange = this.handleFormChange.bind(this);
        this.handleBillTypeChange = this.handleBillTypeChange.bind(this);
        this.handleScopeChange = this.handleScopeChange.bind(this);
        this.handleSubmitForm = this.handleSubmitForm.bind(this);
        this.handleResetForm = this.handleResetForm.bind(this);
        this.handleAuthorChange = this.handleAuthorChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);
        this.addBill = this.addBill.bind(this);

    }
    
    handleFormChange(e){
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleBillTypeChange(e){
        this.setState({
            billType: e.target.value
        });
    }

    handleScopeChange(e){
        this.setState({
            scope: e.target.value
        });
    }

    handleDateChange(e){
        this.setState({
            dateFiled: e.target.value
        });
    }

    handleAuthorChange(e){
        
        const author = e.target.value.split(" ");
        this.setState({
            firstName: author[0],
            middleInitial: author[1],
            lastName: author[2],
            selectedAuthor: e.target.value
        });

    }

    handleSubmitForm(e){
        console.log(this.state);
        this.addBill();
        this.handleResetForm();
    }


    handleResetForm(e){
        
        console.log(this.state);
        this.setState({

            title: "",
            billType: "",
            dateFiled: "",
            longTitle: "",
            scope: "",
            selectedAuthor: "",

        });

    }

    addBill(e){

		fetch('http://localhost:3001/add-bill', {
			method: 'post',
			headers: {
			    'Accept': 'application/json',
			    'Content-Type': 'application/json'
			},
			body: JSON.stringify({
                title: this.state.title,
                billType: this.state.billType,
                dateFiled: this.state.dateFiled,
                longTitle: this.state.longTitle,
                scope: this.state.scope,
                firstName: this.state.firstName,
                middleInitial: this.state.middleInitial,
                lastName: this.state.lastName,
                firstReading: "Pending",
                secondReading: "Pending",
                thirdReading: "Pending"
			})
		})
    }

    render() {
        return (
            <Segment>
            <Form onSubmit={this.handleSubmitForm}>
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
                <b>Bill Type</b>
                <select name="billType" onChange={this.handleBillTypeChange} value={this.state.billType}>
                    <option value="" disabled>Select Type</option>
                    <option value="SBN">SBN</option>
                    <option value="HBN">HBN</option>
                </select>
                <br />
                <b>Scope</b>
                <select name="scope" onChange={this.handleScopeChange} value={this.state.scope}>
                    <option value="" disabled>Select Scope</option>
                    <option value="National">National</option>
                    <option value="Local">Local</option>
                </select>
                <br />
                <b>Author</b>
                <select name="author" onChange={this.handleAuthorChange} value={this.state.selectedAuthor}>
                    <option value="" disabled>Select Author</option>
                    {
                        this.state.billType === "SBN" ?
                        this.state.authorList.filter(legislator => legislator.legislatorType === "Senator").map((key, index) => {
                            return(
                                <option value={key.firstName + " " + key.middleInitial + " " + key.lastName}>{key.firstName + " " + key.middleInitial + " " + key.lastName}</option>
                            );
                        }) :
                        this.state.authorList.filter(legislator => legislator.legislatorType === "House Member").map((key, index) => {
                            return(
                                <option value={key.firstName + " " + key.middleInitial + " " + key.lastName}>{key.firstName + " " + key.middleInitial + " " + key.lastName}</option>
                            );
                        }) 
                    }
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
                <Button
                    color='teal'
                    type='submit'
                    disabled={false
                    }
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
        );
    }
}

export default AddBill;
