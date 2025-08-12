import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

const NavigationBar = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('user'));
  const isAdmin = user && user.role === 'ADMIN';

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('rzp_device_id');
    localStorage.removeItem('rzp_checkout_anon_id');
    navigate('/login');
  };

  return (
    <>
      <Navbar
        expand="lg"
        sticky="top"
        className="bg-dark navbar-dark shadow-lg py-2"
        style={{ fontFamily: 'Segoe UI, sans-serif', fontSize: '16px' }}
      >
        <Container>
          <Navbar.Brand as={NavLink} to="/" className="fw-bold fs-3 text-white">
            Bike<span style={{ color: '#ff4757' }}>X</span>Rent
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="main-navbar" />
          <Navbar.Collapse id="main-navbar">
            <Nav className="me-auto">
              <NavLink to="/bikes" className="nav-link-custom">
                Bikes
              </NavLink>

              {isAdmin && (
                <NavLink to="/allbookings" className="nav-link-custom">
                  All Bookings
                </NavLink>
              )}

              <NavLink to="/contact-us" className="nav-link-custom">
                Contact Us
              </NavLink>

              <NavLink to="/about-us" className="nav-link-custom">
                About Us
              </NavLink>

              {token && (
                <NavLink to="/profile" className="nav-link-custom">
                  User Profile
                </NavLink>
              )}
            </Nav>

            <Nav className="ms-auto">
              {!token ? (
                <>
                  <NavLink to="/login" className="nav-link-custom">
                    Login
                  </NavLink>
                  <NavLink to="/register" className="nav-link-custom">
                    Register
                  </NavLink>
                </>
              ) : (
                <Button
                  variant="outline-danger"
                  className="logout-btn"
                  onClick={handleLogout}
                >
                  Logout
                </Button>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Custom Styles */}
      <style jsx="true">{`
        .nav-link-custom {
          color: #ffffff;
          margin-right: 12px;
          padding: 6px 14px;
          border-radius: 4px;
          transition: all 0.3s ease-in-out;
          text-decoration: none;
          display: inline-block;
        }

        .nav-link-custom:hover,
        .nav-link-custom.active {
          background-color: #17a2b8;
          color: #ffffff;
        }

        .logout-btn {
          transition: all 0.3s ease-in-out;
          padding: 6px 20px;
          font-weight: 500;
        }

        .logout-btn:hover {
          background-color: #dc3545 !important;
          border-color: #dc3545 !important;
          transform: scale(1.05);
        }
      `}</style>
    </>
  );
};

export default NavigationBar;
