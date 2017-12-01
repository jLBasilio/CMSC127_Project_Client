import React, { Component } from 'react';
import { BrowserRouter as Router, withRouter, Switch, Route, Redirect, Link } from 'react-router-dom';
import { Grid, Segment, Form, Message, Header, Button, Sidebar, Menu, Icon, Image } from 'semantic-ui-react';
import './App.css';


// Pages
import NavBar from '../features/NavBar';
import Sidenav from '../features/Sidenav';
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

    }

    this.handleSidebarClick = this.handleSidebarClick.bind(this);
  }


  handleSidebarClick(e){
    this.state.isVisible ?
      this.setState({ isVisible: false }) :
      this.setState({ isVisible: true })
    console.log(this.state.isVisible);

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
        
              <Sidebar.Pushable as={Segment}>
                <Sidebar as={Menu} animation='push' width='thin' visible={this.state.isVisible} icon='labeled' vertical>
                  <Menu.Item as={Link} to='/' name='Home'>
                    <Icon name='cubes' />
                    <Menu.Header>Home</Menu.Header>
                  </Menu.Item>
                  <Menu.Item name='Bill'>
                    <Icon name='law' />
                    <Menu.Header>Bill</Menu.Header>
                    <Menu.Menu>
                      <Menu.Item as={Link} to='/addbill' name='add' active={this.state.activeItem === 'add'} onClick={this.handleItemClick} />
                      <Menu.Item as={Link} to='/deletebill' name='delete' active={this.state.activeItem === 'delete'} onClick={this.handleItemClick} />
                      <Menu.Item as={Link} to='/searchbill' name='search' active={this.state.activeItem === 'search'} onClick={this.handleItemClick} />
                      <Menu.Item as={Link} to='/updatebill' name='update' active={this.state.activeItem === 'update'} onClick={this.handleItemClick} />
                    </Menu.Menu>
                  </Menu.Item>

                  <Menu.Item name='Senator'>
                    <Icon name='user circle' />
                    <Menu.Header>Senator</Menu.Header>
                    <Menu.Menu>
                      <Menu.Item name='add' as={Link} to='/addsenator' active={this.state.activeItem === 'add'} onClick={this.handleItemClick} />
                      <Menu.Item name='delete' as={Link} to='/deletesenator' active={this.state.activeItem === 'delete'} onClick={this.handleItemClick} />
                      <Menu.Item name='search' as={Link} to='/searchsenator' active={this.state.activeItem === 'search'} onClick={this.handleItemClick} />
                      <Menu.Item name='update' as={Link} to='/updatesenator' active={this.state.activeItem === 'update'} onClick={this.handleItemClick} />
                    </Menu.Menu>
                  </Menu.Item>

                  <Menu.Item name='House Member'>
                    <Icon name='user circle outline' />
                    <Menu.Header>House Member</Menu.Header>
                    <Menu.Menu>
                      <Menu.Item name='add' as={Link} to='/addhousemember' active={this.state.activeItem === 'add'} onClick={this.handleItemClick} />
                      <Menu.Item name='delete' as={Link} to='/deletehousemember' active={this.state.activeItem === 'delete'} onClick={this.handleItemClick} />
                      <Menu.Item name='search' as={Link} to='/searchhousemember' active={this.state.activeItem === 'search'} onClick={this.handleItemClick} />
                      <Menu.Item name='update' as={Link} to='/updatehousemember' active={this.state.activeItem === 'update'} onClick={this.handleItemClick} />
                    </Menu.Menu>
                  </Menu.Item>

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
