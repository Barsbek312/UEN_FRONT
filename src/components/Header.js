import React, { Component } from 'react'
import { Container, Nav, Navbar, NavbarCollapse, NavbarToggle } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import logo192 from "../assets/logo192.png"
import Home from "../pages/Home.js"
import LoginComp from '../pages/Login.js';
import AboutUs from '../pages/AboutUs.js';
import SignUpForm from './SignUpForm.js';
import Organizations from '../pages/Organizations.js';
import Volunteers from '../pages/Volunteers.js';
import WasteManagement from '../pages/WasteManagement.js';

export default class Header extends Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="md" bg="light" variant="light" className='navbar'>
          <Container className="top-header">
            <Navbar.Brand href='/' className='navbar-brand'>
              <img
                src={logo192}
                height="50"
                width="50"
                className='logo'
                alt='logo'
              />
            </Navbar.Brand>
            <Nav className='header-links'>
              <Nav.Link href="/login" className="header-link-item">Log In</Nav.Link>
              <Nav.Link href="/signup" className="header-link-item">Sign Up</Nav.Link>
            </Nav>
          </Container>
          <div className='header-separator' />
          <Container className="bottom-header">
            <NavbarToggle aria-controls="responsive-navbar-nav" />
            <NavbarCollapse id="responsive-navbar-nav">
              <Nav className="bottom-header-links">
                <Nav.Link href="/" className="header-links-item">Home</Nav.Link>
                <Nav.Link href="/organizations" className="header-links-item">Organizations</Nav.Link>
                <Nav.Link href="/wastemanagement" className="header-links-item">Waste Management</Nav.Link>
                <Nav.Link href="/volunteers" className="header-links-item">Volunteers</Nav.Link>
                <Nav.Link href="/aboutus" className="header-links-item">About Us</Nav.Link>
              </Nav>
            </NavbarCollapse>
          </Container>
        </Navbar>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginComp />} />
            <Route path="/signup" element={<SignUpForm />} />
            <Route path="/organizations" element={<Organizations />} />
            <Route path="/wastemanagement" element={<WasteManagement />} />
            <Route path="/volunteers" element={<Volunteers />} />
            <Route path="/aboutus" element={<AboutUs />} />
          </Routes>
        </Router>
      </div>
    )
  }
}
