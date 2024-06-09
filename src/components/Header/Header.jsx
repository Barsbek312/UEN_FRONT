import React, { Component, useEffect, useState } from "react";
import {
  Container,
  Nav,
  Navbar,
  NavbarCollapse,
  NavbarToggle,
} from "react-bootstrap";
import logo192 from "./../../assets/logo/logo192.png";
import profile from "./../../assets/profile/to_profile_btn.svg";
import { useSelector } from "react-redux";
import { slide as Menu } from "react-burger-menu";
import "./Slider.css";
import { NavLink } from "react-router-dom";
import h from "./Header.module.css";

const Header = () => {
  const { isAuth, isModerator } = useSelector((state) => state.user);

  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="md"
        bg="light"
        variant="light"
        className="navbar"
      >
        <div className={h.header__top_wrapper}>
          <Container className="top-header">
            {isModerator ? (
              <Menu>
                <NavLink to="/moderator-roles" className="menu-item">
                  Roles
                </NavLink>
                <NavLink to="/moderator-request" className="menu-item">
                  Requests
                </NavLink>
                <NavLink to="/wastemanagement" className="menu-item">
                  Posts
                </NavLink>
              </Menu>
            ) : (
              <p></p>
            )}
            <Navbar.Brand href="/" className={`navbar-brand ${h.navbar}`}>
              <img
                src={logo192}
                height="50"
                width="50"
                className="logo"
                alt="logo"
              />
            </Navbar.Brand>
            <Nav className="header-links">
              {isAuth ? (
                <Navbar.Brand href="/user-profile/" className="navbar-brand">
                  <img src={profile} className="logo" alt="logo" />
                </Navbar.Brand>
              ) : (
                <>
                  <Nav.Link href="/login" className="header-link-item">
                    Log In
                  </Nav.Link>
                  <Nav.Link href="/signup" className="header-link-item">
                    Sign Up
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Container>
        </div>
        {!isModerator && (
          <>
            <div className="header-separator" />
            <div className={h.header__bottom_wrapper}>
              <Container className="bottom-header">
                <NavbarToggle aria-controls="responsive-navbar-nav" />
                <NavbarCollapse id="responsive-navbar-nav">
                  <Nav className="bottom-header-links">
                    <Nav.Link href="/" className="header-links-item">
                      Home
                    </Nav.Link>
                    <Nav.Link
                      href="/organizations"
                      className="header-links-item"
                    >
                      Organizations
                    </Nav.Link>
                    <Nav.Link
                      href="/wastemanagement"
                      className="header-links-item"
                    >
                      Waste Management
                    </Nav.Link>
                    <Nav.Link href="/volunteers" className="header-links-item">
                      Volunteers
                    </Nav.Link>
                    <Nav.Link href="/aboutus" className="header-links-item">
                      About Us
                    </Nav.Link>
                  </Nav>
                </NavbarCollapse>
              </Container>
            </div>
            <div className={h.header__adapted_wrapper}>
              <Menu>
                <NavLink to="/" className="menu-item">
                  Home
                </NavLink>
                <NavLink to="/organizations" className="menu-item">
                  Organizations
                </NavLink>
                <NavLink to="/wastemanagement" className="menu-item">
                  Waste Management
                </NavLink>
                <NavLink to="/volunteers" className="menu-item">
                  Volunteers
                </NavLink>
                <NavLink to="/aboutus" className="menu-item">
                  About Us
                </NavLink>
              </Menu>
            </div>
          </>
        )}
      </Navbar>
    </div>
  );
};

export default Header;
