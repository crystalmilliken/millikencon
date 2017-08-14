import React, { Component } from 'react';
import { Nav, Navbar,NavItem } from 'react-bootstrap';
import Logo from '../images/logo1_white.png';

export default class Header extends Component {
    constructor(props){
        super(props)
        this.changeView = this.changeView.bind(this);
    }
 changeView(page){
            return window.location = `/${page}`;
        }
    render(){
       
        return(
            <Navbar inverse collapseOnSelect style={{marginBottom:"0px"}} fixedTop>
                <Navbar.Header >
                    <Navbar.Brand >
                       <img src={Logo} alt="logo" style={{maxWidth:"180px", minHeight:"50px", padding:"0px"}}/>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                     <Nav style={{paddingLeft:"2em"}}>
                         <NavItem eventKey={1} onClick={(()=>{this.changeView("home")})}>Home</NavItem>
                        <NavItem eventKey={2} onClick={(()=>{this.changeView("about")})}>About</NavItem>
                        <NavItem eventKey={3} onClick={(()=>{this.changeView("portfolio")})}>Portfolio</NavItem>
                        <NavItem eventKey={4} onClick={(()=>{this.changeView("Resume")})}>Resume</NavItem>
                        <NavItem eventKey={4} onClick={(()=>{this.changeView("home#resources")})}>Resources</NavItem>
                        
                    </Nav>
                    </Navbar.Collapse>
            </Navbar>
        
        );
    }
}