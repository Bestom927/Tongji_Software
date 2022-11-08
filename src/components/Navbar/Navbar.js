import React from 'react'
import './Navbar.css';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

const NavBar = () => {

    return (
        <Navbar id="navbar" collapseOnSelect expand="sm" sticky="top" >
            <Container id="coun"  >
                <Navbar.Brand href="/tongji-software"  style={{"color": "white"}}>Tongji_Software</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link href="/tongji-software">Home</Nav.Link>
                        <NavDropdown title="Project info" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/tongji-software/contribution">Contribution</NavDropdown.Item>
                            <NavDropdown.Item href="/tongji-software/description">Description</NavDropdown.Item>
                            <NavDropdown.Item href="/tongji-software/attributions">Attributions</NavDropdown.Item>
                        </NavDropdown>
                        
                        <NavDropdown title="Human practices" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/tongji-software/implementation">Proposed implementation</NavDropdown.Item>
                            <NavDropdown.Item href="/tongji-software/human-practices">Human practices</NavDropdown.Item>
                            <NavDropdown.Item href="/tongji-software/collaborations">Collaborations</NavDropdown.Item>                      
                        </NavDropdown>


 
     
                        <NavDropdown title="Engineering success" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/tongji-software/engineering">Engineering</NavDropdown.Item>
                            <NavDropdown.Item href="/tongji-software/model">Model</NavDropdown.Item>
                            <NavDropdown.Item href="/tongji-software/proof-of-concept">Proof of Concept</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Communication" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/tongji-software/communication">Communication&Education</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Team" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/tongji-software/partnership">Partnership</NavDropdown.Item>
                            <NavDropdown.Item href="/tongji-software/safety">Safety</NavDropdown.Item>
                            <NavDropdown.Item href="/tongji-software/notebook">Notebook</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="Special-Prizes" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/tongji-software/human-practices">Human practices</NavDropdown.Item>
                            <NavDropdown.Item href="/tongji-software/education">Education</NavDropdown.Item>
                            <NavDropdown.Item href="/tongji-software/model">Model</NavDropdown.Item>
                            <NavDropdown.Item href="/tongji-software/software">Software</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    
                
                </Navbar.Collapse>
               
            </Container>
            <div><img src="https://static.igem.wiki/teams/4272/wiki/schoollogo.png" alt="logo" id="logo"></img></div>
      </Navbar>
    )
} 

export default NavBar