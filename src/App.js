import React from 'react';
import {Outlet} from 'react-router-dom';
import {Container} from 'react-bootstrap';
import INavbar from './components/common/Navbar/INavbar';
export default function App() {
    return (
        <>
            <INavbar/>
            <Container>
                <Outlet/>
            </Container>
        </>
    );
}
