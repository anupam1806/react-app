import React, { Component } from "react";
import { Navbar, NavbarBrand, NavItem,Nav, Toast, Collapse, NavbarToggler } from 'reactstrap';
import {NavLink} from "react-router-dom";

class Header extends Component {
    render(){
        return(
            <React.Fragment>
        <Navbar dark expand="md">
            <div className='container'>
                <NavbarToggler onClick={this.toggleNav}/>
            <NavbarBrand className="mr-auto" href='/'><img src="assets/images/logo.png" height="30" width="41" alt="Anupam"/>
            </NavbarBrand>
            <Collapse isOpen={this.state.isOpen} navbar>
            <Nav navbar>
                <NavItem>
                    <NavLink className="nav-link" to="/home">
                        <span className="fa fa-home fa-lg">Home</span>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link" to="/about">
                        <span className="fa fa-info fa-lg">About Us</span>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link" to="/menu">
                        <span className="fa fa-list fa-lg">Menu</span>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="nav-link" to="/contactus">
                        <span className="fa fa-address-card fa-lg">Contact Us</span>
                    </NavLink>
                </NavItem>
            </Nav>
            </Collapse>
            </div>
        </Navbar>
        <Toast>
            <div className="container">
                <div className="row row-header">
                    <div className="col-12 col-sm-6">
                        <h1>lorem</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quia provident inventore nulla sit quo, dolorum, odit quos minima aut deserunt amet laboriosam aliquam iure.</p>
                    </div>
                </div>
            </div>
        </Toast>
        </React.Fragment>
        )
    }
}

export default Header;