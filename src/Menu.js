import React from 'react'
import { Navbar, Nav, NavDropdown } from 'react-bootstrap'
import events from './events'

const Menu = _ =>
  <Navbar bg="dark" variant="dark" expand="md" fixed="top">
    <Navbar.Brand href="/">Finisher.Tech</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <NavDropdown title="Eventos" id="basic-nav-dropdown">
          {
            events.map((event) =>
              <NavDropdown.Item key={event.id} href={'#' + event.id}>
                {event.title}
              </NavDropdown.Item>
            )
          }
        </NavDropdown>
        <Nav.Link href="#sobre">Sobre</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>

export default Menu
