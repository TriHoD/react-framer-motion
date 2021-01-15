import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navbar = styled.nav `
    height: 60px;
    background: transparent;
    padding: 0rem calc((100vw - 1300px) / 2);
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const NavItems = styled.div``;
const Logo = styled.div`
    color: #000;
    padding-left: 1rem;
    text-decoration: none;
    font-size: 3.25rem;
    font-weight: bold;
    font-style: italic;
    background: #141e30; /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #141e30, #243b55); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #141e30, #243b55); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    color:transparent;
    -webkit-background-clip: text;
    background-clip: text;
`;
const NavbarLink = styled(Link)`
    color: #000;
    font-size: 1.5rem;
    text-decoration: none;
    padding: 1rem
`;

const Header = () => {
    return (
        <Navbar>
            <Logo to="/">Nature</Logo>
            <NavItems>
                <NavbarLink to="/">Home</NavbarLink>
                <NavbarLink to="/about">About</NavbarLink>
                <NavbarLink to="/contact">Contact</NavbarLink>
            </NavItems>
        </Navbar>
    )
}

export default Header
