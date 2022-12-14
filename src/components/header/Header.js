import React from "react";
import "./Header.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../assets/logo.png";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div style={{ width: "90%" }} className="m-auto">
      <Navbar style={{ width: "90%" }} className="m-auto">
        <Container fluid>
          <Nav.Link href="/home">
            <img
              src={logo}
              className=""
              style={{ height: "87px", width: "200px" }}
              alt=""
            />
          </Nav.Link>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0">
              <Link className="navBarMenuText" to="/how-it-works">
                HOW IT WORKS
              </Link>
              <Link className="navBarMenuText" to="/action2">
                TOP PRODUCTS
              </Link>
              <Link className="navBarMenuText" to="/action2">
                DEALS
              </Link>
            </Nav>

            <button className="headerLoginBtn">LOG IN</button>
            <button className="headerSignupBtn">Sign up</button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="headerNextSection">
        <div className="dropdown">
          <button className="dropbtn">Dropdown</button>
          <div className="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
        <div>
          <input
            className="headerSearchField"
            type="text"
            placeholder="        search..."
          />
        </div>
        <div className="ms-3">
          <div className="headerShoppingCart">
            <ShoppingBagOutlinedIcon style={{ color: "#fd841f" }} />
          </div>
        </div>
      </div>
    </div>
  );
}
