import "./Header.css";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import logo from "../../assets/logo.jpg";
import { useContext } from "react"; 
import { CartContext } from "../../context/CartContext"; 

const Header = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const { cartItems } = useContext(CartContext); 

  
const totalItems = cartItems.length;

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

 

  return (
    <Navbar expand="lg" bg="light" variant="light" fixed="top" className="header-nav">
      <Container className="d-flex align-items-center justify-content-between">
        {/* LOGO & MENU giữ nguyên ... */}
        <Navbar.Brand>
          <Link to="/" className="nav-logo d-flex align-items-center">
            <img src={logo} alt="Logo" className="logo-img" />
          </Link>
        </Navbar.Brand>

        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-center">
          <Nav className="main-menu">
            <NavLink to="/" className="menu-item">HOME</NavLink>
            <NavLink to="/shop" className="menu-item">SHOP</NavLink>
            <NavLink to="/service" className="menu-item">SERVICE</NavLink>
            <NavLink to="/branch" className="menu-item">BRANCH</NavLink>
            
            <NavLink to="/booking" className="menu-item">BOOKING</NavLink>
            {user?.role === "Admin" && (
              <NavLink to="/admin" className="menu-item">DASHBOARD</NavLink>
            )}
          </Nav>
        </Navbar.Collapse>

        <div className="right-icons d-flex align-items-center gap-3">
          {user ? (
            <>
              <span className="nav-link">Hi, {user.name}</span>
              <button className="btn btn-outline-danger btn-sm" onClick={handleLogout}>Logout</button>
            </>
          ) : (
            <Link to="/login" className="icon-link"><FaUser className="icon" /></Link>
          )}

         
          <Link to="/cart" className="icon-link position-relative">
            <FaShoppingCart className="icon" />
            {totalItems > 0 && (
              <span 
                className="position-absolute translate-middle badge rounded-pill bg-danger"
                style={{ fontSize: '0.6rem', top: '0', left: '100%' }}
              >
               {cartItems.length}
              </span>
            )}
          </Link>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;