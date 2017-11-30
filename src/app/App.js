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


class App extends Component {

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

                  
                  <Menu.Item name='Legislator'>
                    <Icon name='user circle' />
                    <Menu.Header>Legislator</Menu.Header>
                    <Menu.Menu>
                        
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
                    <Switch>
                      <Route exact path="/" component={Home} />
                      <Route path="/addbill" component={AddBill} />
                      <Route path="/deletebill" component={DeleteBill} />
                      <Route path="/searchbill" component={SearchBill} />
                      <Route path="/updatebill" component={UpdateBill} />
                      <Redirect to="/" />
                    </Switch>
                  </Segment>
                </Sidebar.Pusher>
              </Sidebar.Pushable>
            </div >
          }
      </Router>
    );
  }
}

export default App;
