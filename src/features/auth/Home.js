import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Segment, Form, Message, Header, Button, Sidebar, Menu, Icon, Image } from 'semantic-ui-react';

import '../feature.css'

class Home extends Component {

    constructor(props) {

        super(props)

        this.state = {

            visible: false,
            activeItem: "",

        }

        this.handleForm = this.handleForm.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleItemClick = this.handleItemClick.bind(this);

    }


    handleForm(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e) {

    }

    handleClick(e){
        this.state.visible ? 
            this.setState({visible: false}) :
            this.setState({visible: true}) 
    }

    handleItemClick(e){
        this.setState({activeItem: e.target.name })
    }

    render() {
        return (
           <h2>HOME PAGE</h2>
        );
    }
}

export default Home;
