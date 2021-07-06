import React, { Component } from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import { BrowserRouter as Router } from "react-router-dom";

export class Header extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Container>
                        <Router>
                            <Navbar.Brand href="/">Drinkzone</Navbar.Brand>
                            <Nav className="me-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/favorite">Favorite</Nav.Link>
                            </Nav>
                        </Router>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

export default Header
