import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import AuthService from '../components/jwtComponents/services/auth-service';
import EventBus from '../components/jwtComponents/EventBus'

const NavbarTop = () => {
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }

    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, []);

  const logOut = () => {
    AuthService.logout();
    setShowAdminBoard(false);
    setCurrentUser(undefined);
  };
  
    return (
      <>
        <Navbar bg="info" variant="dark">
          <Container className="font">
            <Navbar.Brand style={{ fontWeight: "bold" }} href="/"></Navbar.Brand>
            <Nav className="d-flex justify-content-end" style={{fontSize:"18px", fontWeight:"bold"}}>
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/sylwester">Sylwester</Nav.Link>
              <Nav.Link href="/ferie">Ferie</Nav.Link>
              <Nav.Link href="/majowka">Majówka</Nav.Link>
              <Nav.Link href="/wakacje">Wakacje</Nav.Link>
              {showAdminBoard && (<Nav.Link href="/alltrips">Lista wycieczek</Nav.Link>)}
              {showAdminBoard && (<Nav.Link href="/allusers">List uzytkownikow</Nav.Link>)}
              {currentUser ? (
              <>
                <Nav.Link href="/profile">
                  {currentUser.username}
                </Nav.Link>

                <li className="nav-item">
                  <a href="/login" className="nav-link" onClick={logOut}>
                    Logout
                  </a>
                </li>
              </>
            ) : (
              <>
                <Nav.Link href="/login">
                  Login
                </Nav.Link>

                <Nav.Link href="/register">
                  Rejestracja
                </Nav.Link>
              </>
            )}
            </Nav>
          </Container>
        </Navbar>
      </>
    )
  }
  
  
  export default NavbarTop;