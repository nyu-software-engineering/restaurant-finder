import React, {Component } from 'react';
import { Navbar, Nav, NavDropdown, Button } from 'react-bootstrap';
import {NavLink} from "react-router-dom";
import axios from 'axios';
import { Switch, Route } from 'react-router-dom';
import Signup from "../auth/Signup";
import Login from "../auth/Login";
import searchObj from "../designPatterns/SearchStateSingleton"

class GlobalNavBar extends Component {

    constructor(props)
    {
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout(event)
      {
        event.preventDefault();
        console.log('logging out!!! SEE YA');
        axios.post('/user/logout').then(response => {
          //console.log(response.data);
          if(response.status === 200)
          {
            this.props.app.updateUser({
              loggedIn: false,
              user: null
            })
          }
        }).catch(error => {
          console.log("logging out caused " + error);
        })
      }
    render(){

		return (
			<>
            <Switch>
			        <Route exact path="/signup" component={Signup}/>
			        <Route exact path="/login" render={() => <Login updateUser = {this.props.app.updateUser}/>}/>
              <Route exact path="/userdashboard" render={() => <UserDashboard updateUser={this.props.app.updateUser} loggedIn = {this.props.loggedIn} user={this.props.user}/>}/>
          </Switch>
			<Navbar bg="light" expand="lg">
			    <Navbar.Toggle aria-controls="basic-navbar-nav" />
			    <Navbar.Collapse id="basic-navbar-nav">
                    <img className="logo" src="happyeggs.ico"></img>
			        <a className="restaurantfinder" onClick={searchObj.app.loadSearch}><Nav.Link style={{color: "white"}} href="">Restaurant Finder</Nav.Link></a>
                    <div className="navbarlogin">
			        {!this.props.loggedIn  && [
			            <NavLink style={{color: "white"}} to="/signup">Sign Up</NavLink>,<Navbar.Brand></Navbar.Brand>,
			            <NavLink style={{color: "white"}} to="/login">Login</NavLink>
                        ]}
			            {this.props.loggedIn && (<Button onClick={this.logout}>Logout user: {this.props.username}</Button>)}
                    </div>
                </Navbar.Collapse>
			</Navbar>
			</>
			)

        // return (

        // <Navbar bg="light" expand="lg">
        //     <Switch>
        //         <Route exact path="/signup" component={Signup}/>
        //         <Route exact path="/login" render={() => <Login updateUser = {this.props.app.updateUser}/>}/>
        //     </Switch>
        //     <Navbar.Brand onClick={this.props.app.loadSearch} href="">Restaurant Finder - Username{this.props.username}</Navbar.Brand>
        //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
        //     <Navbar.Collapse id="basic-navbar-nav">
        //         <Nav className="mr-auto">
        //         <a onClick={this.props.app.loadSearch}><Nav.Link href="/">Search</Nav.Link></a>
        //         <p>Restaurant Finder - Username: {this.props.username}</p>
        //         {!this.props.loggedIn  && [
        //             <NavLink style={{float: "right"}} to="/signup">Sign Up</NavLink>,
        //             <NavLink style={{float: "right"}} to="/login">Login</NavLink>
        //             ]}
        //             {this.props.loggedIn && (<Button onClick={this.logout}>Logout</Button>)}

        //         </Nav>
        //     </Navbar.Collapse>
        // </Navbar>
        // )
    }
}

export default GlobalNavBar;
