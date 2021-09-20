import {Navbar, Nav, NavDropdown} from "react-bootstrap";
import {Link} from "react-router-dom";
import {ReactComponent as LogoIcon} from "./deloitte-02.svg";
import React from "react";

const MastHead = () => {
    return (
        <Navbar style={{backgroundColor: "black"}} expand="lg">
            <Navbar.Brand>
                <LogoIcon height={50} width={50}/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/" href="/" style={{color: "white"}}>
                        Home
                    </Nav.Link>
                    {/* <Nav.Link as={Link} to="/sports" href="/sports" style={{color: "white"}}>
                        Sports
                    </Nav.Link>
                    <Nav.Link as={Link} to="/fitness" href="/fitness" style={{color: "white"}}>
                        Fitness
                    </Nav.Link>
                    <NavDropdown title={<span style={{color: "white"}}>My Stuff</span>} id="basic-nav-dropdown">
                        <NavDropdown.Item href="/joined_events">My Joined Events</NavDropdown.Item><NavDropdown.Divider/>
                        <NavDropdown.Item href="/created_events">My Created Events</NavDropdown.Item><NavDropdown.Divider/>
                        <NavDropdown.Item href="/rewards">My Rewards</NavDropdown.Item><NavDropdown.Divider/>
                        <NavDropdown.Item href="/recognise">My Recognition</NavDropdown.Item>
                    </NavDropdown> */}
                </Nav>
                <Nav className="ml-auto">
                    <Nav.Link as={Link} to="/login" href="/login" style={{color: "white"}}>
                        Login
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default MastHead;