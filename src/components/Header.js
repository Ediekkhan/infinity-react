import React from "react";
import { Container, Navbar, Nav, NavDropdown, NavLink } from "react-bootstrap";

function Header() {
  // const [active, setActive] = useState(null);

  const links = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Shop",
      href: "/Shop",
    },
    {
      title: "About",
      href: "/about",
    },
  ];

  // const handleCllick = (index) => {
  //   setActive(index);
  //   // console.log(index, "active");
  // };

  const link = links.map((item, index) => (
    <NavLink
      key={index}
      // onClick={() => handleCllick(index)}
      // className={active === index ? "active" : ""}
      href={item.href}
    >
      {item.title}
    </NavLink>
  ));
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#home">INIFINTY FITNESS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {link}
            <NavDropdown title="Classes" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Aerobics</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
