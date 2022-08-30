import React from 'react'

import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

const NavBar = () => {

    return (
        <Navbar collapseOnSelect expand="sm" sticky="top" >
            <Container>
                <Navbar.Brand href="/tongji-software">Tongji_Software</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link href="/tongji-software">Home</Nav.Link>
                        <NavDropdown title="Team" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/tongji-software/attributions">Attributions</NavDropdown.Item>
                            <NavDropdown.Item href="/tongji-software/collaborations">Collaborations</NavDropdown.Item>
                        </NavDropdown>
                        
                        <NavDropdown title="Project" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/tongji-software/description">Description</NavDropdown.Item>
                            <NavDropdown.Item href="/tongji-software/engineering">Engineering</NavDropdown.Item>
                            <NavDropdown.Item href="/tongji-software/model">Model</NavDropdown.Item>
                            <NavDropdown.Item href="/tongji-software/measurement">Measurement</NavDropdown.Item>
                            <NavDropdown.Item href="/tongji-software/implementation">Implementation</NavDropdown.Item>
                            <NavDropdown.Item href="/tongji-software/proof-of-concept">Proof of Concept</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Parts" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/tongji-software/parts">Parts</NavDropdown.Item>
                            <NavDropdown.Item href="/tongji-software/contribution">Contribution</NavDropdown.Item>
                            <NavDropdown.Item href="/tongji-software/improve">Improvement</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="/tongji-software/safety">Safety</Nav.Link>
                        
                        <Nav.Link href="/tongji-software/human-practices">Human Practices</Nav.Link>

                        <NavDropdown title="Awards" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/tongji-software/education">Education</NavDropdown.Item>
                            <NavDropdown.Item href="/tongji-software/entrepreneurship">Entrepreneurship</NavDropdown.Item>
                            <NavDropdown.Item href="/tongji-software/hardware">Hardware</NavDropdown.Item>
                            <NavDropdown.Item href="/tongji-software/inclusivity">Inclusivity</NavDropdown.Item>
                            <NavDropdown.Item href="/tongji-software/measurement">Measurement</NavDropdown.Item>
                            <NavDropdown.Item href="/tongji-software/model">Model</NavDropdown.Item>
                            <NavDropdown.Item href="/tongji-software/plant">Plant</NavDropdown.Item>
                            <NavDropdown.Item href="/tongji-software/software">Software</NavDropdown.Item>
                            <NavDropdown.Item href="/tongji-software/sustainable">Sustainable</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>

                </Navbar.Collapse>
            </Container>
      </Navbar>
    )
} 

export default NavBar