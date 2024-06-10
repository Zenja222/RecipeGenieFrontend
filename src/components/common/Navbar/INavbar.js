import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {ALL_RECIPE_VIEW_PATH, RECIPE_ADD_VIEW_PATH} from '../../../routes/routes';

function INavbar() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">Recipe Genie</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link className="nav-link" to={ALL_RECIPE_VIEW_PATH}>All Recipes</Link>
                        <Link className="nav-link" to={ALL_RECIPE_VIEW_PATH}>Find My Recipe</Link>
                        <Link className="nav-link" to={RECIPE_ADD_VIEW_PATH}>Add Recipe</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default INavbar;
