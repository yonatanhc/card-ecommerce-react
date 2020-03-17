import React from 'react';
import { Container, Navbar, Nav } from "react-bootstrap";
import Cart from '../Cart';
import { ReactComponent as Logo } from '../../assets/svg/original.svg'
import './TopMenu.scss'

export default function TopMenu(props) {
    const { productsCart, getProductCart, products } = props;
    return (
        <Navbar bg="dark" variant="dark" className="top-menu">
            <Container>
                <BrandNav />
                <Cart productsCart={productsCart} getProductCart={getProductCart} products={products} />
            </Container>
        </Navbar>
    );
}

function BrandNav() {
    return (
        <Navbar.Brand>
            <Logo />
            <h2>La casa de los Helados</h2>

        </Navbar.Brand>
    );
}

