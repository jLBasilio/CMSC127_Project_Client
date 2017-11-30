import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Segment, Form, Message, Header, Button, Sidebar, Menu, Icon, Image } from 'semantic-ui-react';

import './feature.css'

import AddBill from './bill/AddBill'


class Sidenav extends Component {

    constructor(props) {

        super(props)

        this.state = {

            visible: false,
            activeItem: "",
            activePage: "",

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

    handleClick(e) {
        this.state.visible ?
            this.setState({ visible: false }) :
            this.setState({ visible: true })
        console.log(this.state.visible);
    }

    handleItemClick(e) {
        this.setState({ activeItem: e.target.name })
    }

    render() {
        // const current_page = AddBill
        return (
            <div>
                <Sidebar.Pushable as={Segment}>
                <Sidebar as={Menu} animation='push' width='thin' visible={this.props.visible} icon='labeled' vertical>
                    <Menu.Item name='Bill' as={Link} to='/addbill'>
                        <Icon name='law' />
                        <Menu.Header>Bill</Menu.Header>
                        <Menu.Menu>
                                <Menu.Item name='add' active={this.state.activeItem === 'add'} onClick={this.handleItemClick} as={Link} to='/addbill'/>
                            <Menu.Item name='delete' active={this.state.activeItem === 'delete'} onClick={this.handleItemClick} />
                            <Menu.Item name='search' active={this.state.activeItem === 'search'} onClick={this.handleItemClick} />
                            <Menu.Item name='update' active={this.state.activeItem === 'update'} onClick={this.handleItemClick} />
                        </Menu.Menu>
                    </Menu.Item>
                    <Menu.Item name='Senator'>
                        <Icon name='user circle' />
                        <Menu.Header>Senator</Menu.Header>
                        <Menu.Menu>
                            <Menu.Item name='add' active={this.state.activeItem === 'add'} onClick={this.handleItemClick} />
                            <Menu.Item name='delete' active={this.state.activeItem === 'delete'} onClick={this.handleItemClick} />
                            <Menu.Item name='search' active={this.state.activeItem === 'search'} onClick={this.handleItemClick} />
                            <Menu.Item name='update' active={this.state.activeItem === 'update'} onClick={this.handleItemClick} />
                        </Menu.Menu>
                    </Menu.Item>
                    <Menu.Item name='House Member'>
                        <Icon name='user circle outline' />
                        <Menu.Header>House Member</Menu.Header>
                        <Menu.Menu>
                            <Menu.Item name='add' active={this.state.activeItem === 'add'} onClick={this.handleItemClick} />
                            <Menu.Item name='delete' active={this.state.activeItem === 'delete'} onClick={this.handleItemClick} />
                            <Menu.Item name='search' active={this.state.activeItem === 'search'} onClick={this.handleItemClick} />
                            <Menu.Item name='update' active={this.state.activeItem === 'update'} onClick={this.handleItemClick} />
                        </Menu.Menu>
                    </Menu.Item>
                </Sidebar>
                <Sidebar.Pusher>
                    <Segment basic>
                        <Header as='h3'>Application Content</Header>
                        
                    </Segment>
                </Sidebar.Pusher>
                </Sidebar.Pushable>
            </div >
        );
    }
}

export default Sidenav;
