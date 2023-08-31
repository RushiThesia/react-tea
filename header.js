import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { logo } from "../assets/images";
import { LuSearch } from 'react-icons/lu';
import { BsPerson } from 'react-icons/bs';
import { RiShoppingBagLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Link Link to='/'><img src={logo} alt="logo" /></Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <div className='ms-2'>
              <Link Link to='/tea-Collections' className='text-decoration-none text-dark'>TEA COLLECTIONS</Link>
            </div>

            <div className='ms-2'>
              <Link className='text-decoration-none  text-dark'>ACCESSORIES</Link>
            </div>

            <div className='ms-2'>
              <Link className='text-decoration-none  text-dark'>BLOG</Link>
            </div>

            <div className='ms-2'>
              <Link className='text-decoration-none  text-dark'>CONTACT US</Link>
            </div>
          </Nav>

          <div className='d-flex'>
            <Nav.Link><LuSearch /></Nav.Link>
            <Nav.Link><BsPerson /></Nav.Link>
            <Nav.Link><RiShoppingBagLine /></Nav.Link>

          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
