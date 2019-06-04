import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar bg-primary navbar-extend-sm navbar-dark px-sm-5">
                <Link to="/">
                    <i className="fas fa-mobile-alt fa-2x" />
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">Products</Link>
                    </li>
                </ul>
                <Link to="/cart" className="ml-auto">
                    <ButtonContainer><span>
                        <i class="fas fa-shopping-cart" /></span>
                        {" "}My Cart</ButtonContainer>
                </Link>
            </nav>
        )
    }
}

const ButtonContainer = styled.button`
text-transform: capitalize;
font-size: 1.4rem;
background: transparent;
border: 0.2rem solid var(--lightBlue);
border-radius: 5px;`