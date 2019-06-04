import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';
import styled from 'styled-components'

export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-extend-sm navbar-dark px-sm-5">
                <Link to="/">
                    <i className="fas fa-robot fa-2x" />
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">Products</Link>
                    </li>
                </ul>
                <Link to="/cart" className="ml-auto">
                    <ButtonContainer><span className="mr-2">
                        <i class="fas fa-shopping-cart" /></span>
                        {" "}My Cart</ButtonContainer>
                </Link>
            </NavWrapper>
        )
    }
}

const NavWrapper = styled.nav`
background: var(--mainBlue);
.nav-link{
    color:var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform:capitalize ;
}
`