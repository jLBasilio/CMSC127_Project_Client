import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Segment, Form, Message, Header, Button } from 'semantic-ui-react';

import '../feature.css'

class Login extends Component {

    constructor(props){

        super(props)

        this.state = {

            username: "",
            password: "",
            validAccount: null,

        }

        this.handleForm = this.handleForm.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    
    handleForm(e){
        this.setState({
            [e.target.name]: e.target.value
        });

    }

    handleSubmit(e){
        this.state.username === "admin" && this.state.password === "admin" ? 
            this.setState({validAccount: true}) : 
            this.setState({validAccount: false})
    }

    render() {
        return (
            <Grid 
            columns={1} 
            padded 
            centered 
            verticalAlign='middle'
            style={{ height: '100%' }}
            >
                <Grid.Row verticalAlign='middle'>
                    <Grid.Column width={7} verticalAlign='middle'>
                        <Header color='white'>
                            Bill System
                        </Header>
                        <Segment raised>
                            <Form onSubmit={this.handleSubmit} error={!this.state.validAccount}>
                                <Form.Input onChange={this.handleForm} name='username' placeholder='Username' />
                                <Form.Input onChange={this.handleForm} name='password' type='password' placeholder='Password' />
                                <Button disabled={!this.state.username || !this.state.password} type='submit'>Login</Button>
                                {

                                    this.state.validAccount === true ?
                                            alert("Valid") :

                                        this.state.validAccount === false ?
                                        <Message
                                        error
                                        header='Invalid Account'
                                        // content='You can only sign up for an account once with a given e-mail address.'
                                        /> : console.log("Valid")
                                        
                                }
                                
                            </Form>
                        </Segment>
                    </Grid.Column>
                </Grid.Row>

            </Grid>

        );
    }
}

export default Login;
