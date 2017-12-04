import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Dropdown, Input, Image, Icon, Header, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types'


const colors = [
    'red', 'orange', 'yellow', 'olive', 'green', 'teal',
    'blue', 'violet', 'purple', 'pink', 'brown', 'grey', 'black',
]

class NavBar extends Component {
    static propTypes = {
        color: PropTypes.string,
    }
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

    handleClick(e) {
        this.state.visible ?
            this.setState({ visible: false }) :
            this.setState({ visible: true })
        console.log(this.state.visible);
    }

    handleItemClick(e) {
        this.setState({ activeItem: e.target.name })
    }


    render(){
        return (
            <Menu attached='top' tabular>
                <Menu.Item>
                    <Button onClick={this.props.visible} color="blue" icon>
                        <Icon name="sidebar" size="large" />
                    </Button>
                </Menu.Item>
                <Menu.Item as={Link} to='/' position='right'>
                    <Header as='h3' color='blue' textAlign='left'>
                        Bill System
                    </Header>
                </Menu.Item>
                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Dropdown icon="setting" size="tiny">
                            <Dropdown.Menu>
                                <Dropdown.Item as={Link} to='/'>
                                    Log Out
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        );
    }
}

export default NavBar;