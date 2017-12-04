import React, { Component } from 'react';
import { BrowserRouter as Router, withRouter, Switch, Route, Redirect, Link } from 'react-router-dom';
import { Accordion, Grid, Segment, Form, Message, Header, Button, Sidebar, Menu, Icon, Image, Dropdown } from 'semantic-ui-react';
import './App.css';


// Pages
import NavBar from '../features/NavBar';
import Loading from '../features/auth/Loading';
import Login from '../features/auth/Login';
import Home from '../features/auth/Home';
import AddBill from '../features/bill/AddBill';
import DeleteBill from '../features/bill/DeleteBill';
import SearchBill from '../features/bill/SearchBill';
import UpdateBill from '../features/bill/UpdateBill';

import AddSenator from '../features/senator/AddSenator';
import SearchSenator from '../features/senator/SearchSenator';
import DeleteSenator from '../features/senator/DeleteSenator';
import UpdateSenator from '../features/senator/UpdateSenator';

import AddHouseMember from '../features/housemember/AddHouseMember';
import SearchHouseMember from '../features/housemember/SearchHouseMember';
import DeleteHouseMember from '../features/housemember/DeleteHouseMember';
import UpdateHouseMember from '../features/housemember/UpdateHouseMember';


class App extends Component {
    componentDidMount(){
      document.title = "Bill System";
    }
  constructor(props){

    super(props);


    this.state = {

      isGettingSession: false,
      user: true,
      isVisible: false,
      activeIndex: -1,
    }

    this.handleSidebarClick = this.handleSidebarClick.bind(this);
  }


  handleSidebarClick(e){
    this.state.isVisible ?
      this.setState({ isVisible: false }) :
      this.setState({ isVisible: true })
    console.log(this.state.isVisible);

  }

  handleClick = (e, titleProps) => {
    const { index } = titleProps
    const { activeIndex } = this.state
    const newIndex = activeIndex === index ? -1 : index

    this.setState({ activeIndex: newIndex })
  }


  render() {
    return (
      <Router history={withRouter}>
        {this.state.isGettingSession ?
          <Loading /> : 
          !this.state.user ? 
          <Switch>
            <Route exact path="/" component={Login} />
            <Redirect to="/" />
          </Switch> : 
            <div>
              <NavBar visible={this.handleSidebarClick}/>
              <Sidebar.Pushable>
                <Sidebar as={Menu} animation='push' width='thin' visible={this.state.isVisible} icon='labeled' vertical>

                  <Accordion styled>

                    <Menu.Item as={Link} to='/' name='Home'>
                      <Icon name='cubes' />
                      <Menu.Header>Home</Menu.Header>
                    </Menu.Item>

                    <Accordion.Title active={this.state.activeIndex === 1} index={1} onClick={this.handleClick}>
                        <Icon name='dropdown' />
                        <Icon name='law' />
                        <strong>Bill</strong>
                    </Accordion.Title>

                        <Accordion.Content active={this.state.activeIndex === 1}>

                          <Menu.Item as={Link} to='/addbill' name='Add Bill' icon="plus" active={this.state.activeItem === 'add'} onClick={this.handleItemClick} />
                          <Menu.Item as={Link} to='/searchbill' name='Search Bill' icon="search" active={this.state.activeItem === 'search'} onClick={this.handleItemClick} />
                          <Menu.Item as={Link} to='/updatebill' name='Update Bill' icon="edit" active={this.state.activeItem === 'update'} onClick={this.handleItemClick} />
                          <Menu.Item as={Link} to='/deletebill' name='Delete Bill' icon="minus" active={this.state.activeItem === 'delete'} onClick={this.handleItemClick} />

                        </Accordion.Content>




                    <Accordion.Title active={this.state.activeIndex === 2} index={2} onClick={this.handleClick}>
                        <Icon name='dropdown' />
                        <Icon name='user circle' />
                        <strong>Senator</strong>
                    </Accordion.Title>

                        <Accordion.Content active={this.state.activeIndex === 2}>

                          <Menu.Item name='Add Senator' as={Link} to='/addsenator' icon="plus" active={this.state.activeItem === 'add'} onClick={this.handleItemClick} />
                          <Menu.Item name='Search Senator' as={Link} to='/searchsenator' icon="search" active={this.state.activeItem === 'search'} onClick={this.handleItemClick} />
                          <Menu.Item name='Update Senator' as={Link} to='/updatesenator' icon="edit" active={this.state.activeItem === 'update'} onClick={this.handleItemClick} />
                          <Menu.Item name='Delete Senator' as={Link} to='/deletesenator' icon="minus" active={this.state.activeItem === 'delete'} onClick={this.handleItemClick} />
                        </Accordion.Content>

                    <Accordion.Title active={this.state.activeIndex === 3} index={3} onClick={this.handleClick} textAlign="left">
                        <Icon name='dropdown' />
                        <Icon name='user circle' />
                        <strong>House Member</strong>
                    </Accordion.Title>

                      <Accordion.Content active={this.state.activeIndex === 3}>

                      <Menu.Item name='Add House Member' as={Link} to='/addhousemember' icon="plus" active={this.state.activeItem === 'add'} onClick={this.handleItemClick} />
                      <Menu.Item name='Search House Member' as={Link} to='/searchhousemember' icon="search" active={this.state.activeItem === 'search'} onClick={this.handleItemClick} />
                      <Menu.Item name='Update House Member' as={Link} to='/updatehousemember' icon="edit" active={this.state.activeItem === 'update'} onClick={this.handleItemClick} />
                      <Menu.Item name='Delete House Member' as={Link} to='/deletehousemember' icon="minus" active={this.state.activeItem === 'delete'} onClick={this.handleItemClick} />

                      </Accordion.Content>

                  </Accordion>

                </Sidebar>

                <Sidebar.Pusher>
                    <Switch>
                      <Route exact path="/" component={Home} />
                      <Route path="/addbill" component={AddBill} />
                      <Route path="/deletebill" component={DeleteBill} />
                      <Route path="/searchbill" component={SearchBill} />
                      <Route path="/updatebill" component={UpdateBill} />

                      <Route path="/addsenator" component={AddSenator} />
                      <Route path="/searchsenator" component={SearchSenator} />
                      <Route path="/deletesenator" component={DeleteSenator} />
                      <Route path="/updatesenator" component={UpdateSenator} />


                      <Route path="/addhousemember" component={AddHouseMember} />
                      <Route path="/searchhousemember" component={SearchHouseMember} />
                      <Route path="/deletehousemember" component={DeleteHouseMember} />
                      <Route path="/updatehousemember" component={UpdateHouseMember} />
                      <Redirect to="/" />
                    </Switch>
                </Sidebar.Pusher>
              </Sidebar.Pushable>
            </div >
          }
      </Router>
    );
  }
}

export default App;
