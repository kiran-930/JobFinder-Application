import React, { useContext } from "react";
import { Navbar, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { tokenAuthContext } from "../contexts/AuthContext";

function Header({ insideDashboard }) {
  const { isAuthorised, setIsAuthorised } = useContext(tokenAuthContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    sessionStorage.clear();
    setIsAuthorised(false);
    navigate("/");
  };
  return (

    
    <Navbar
      style={{ zIndex: "10px" }}
      expand="lg"
      className="position-fixed w-100 top-0 border rounded"
    >
      <Container>
        <Navbar.Brand href="#home">
          <Link
            className="fw-bolder"
            to={"/"}
            style={{ textDecoration: "none", color: "blue" }}
          >  
          <i class="fa-solid fa-briefcase ms-1"></i>CareerConnect
          </Link>
        </Navbar.Brand>
        {insideDashboard && (
          <div className="ms-auto">
            <button
              onClick={handleLogout}
              style={{ textDecoration: "none" }}
              className="btn btn-link fw-bolder text-danger"
            >
              LogOut <i className="fa-solid fa-right-from-bracket"></i>
            </button>
          </div>
        )}
      </Container>
    </Navbar>
  );
}

export default Header;