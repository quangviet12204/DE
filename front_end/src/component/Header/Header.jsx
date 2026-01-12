import "./Header.css";
import { NavLink, Link, useNavigate } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import logo from "../../assets/logo.jpg";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const shopSubMenu = [
    { label: "All products", link: "/shop" },
    { label: "Hair Wax", link: "/products/WAX" },
    { label: "POMADE", link: "/products/POMADE" },
    { label: "Shampoo/Conditioner", link: "/products/SHAMPOO" },
  ];

  return (
    <Navbar expand="lg" bg="light" variant="light" fixed="top" className="header-nav">
      <Container className="d-flex align-items-center justify-content-between">
        {/* LEFT — LOGO */}
        <Navbar.Brand>
          <Link to="/" className="nav-logo d-flex align-items-center">
            <img src={logo} alt="Logo" className="logo-img" />
          </Link>
        </Navbar.Brand>

        {/* CENTER — MENU */}
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-center">
          <Nav className="main-menu">
            <NavDropdown title="SHOP" className="menu-item">
              {shopSubMenu.map(item => (
                <NavDropdown.Item as={Link} key={item.link} to={item.link}>
                  {item.label}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            <NavLink to="/service" className="menu-item">SERVICE</NavLink>
            <NavLink to="/branch" className="menu-item">BRANCH</NavLink>
            <NavLink to="/aboutme" className="menu-item">NEWS</NavLink>
            <NavLink to="/booking" className="menu-item">BOOKING</NavLink>

            {/* Admin Dashboard menu */}
            {user?.role === "Admin" && (
              <NavLink to="/admin" className="menu-item">DASHBOARD</NavLink>
            )}
          </Nav>
        </Navbar.Collapse>

        {/* RIGHT — ICONS */}
        <div className="right-icons d-flex align-items-center gap-3">
          {user ? (
            <>
              <span className="nav-link">Hi, {user.name}</span>
              <button className="btn btn-outline-danger btn-sm" onClick={handleLogout}>
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="icon-link">
              <FaUser className="icon" />
            </Link>
          )}

          <Link to="/cart" className="icon-link">
            <FaShoppingCart className="icon" />
          </Link>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
