import React from 'react';
import { Col, Card, Button } from 'react-bootstrap';
import { BASE_PATH } from "../../utils/contants";

import './Product.scss';

export default function Product(props) {

    const { product, addProductCart } = props;
    return (
        <Col xs={3} className="product">
            <Card>
                <Card.Img variant="top" src={`${BASE_PATH}/${product.image}`} />
                <Card.Body>
                    <Card.Title> {product.name} </Card.Title>
                    <Card.Text>{product.extraInfo}</Card.Text>
                    <Card.Text>{product.price} $ / unidad</Card.Text>
                    <Button onClick={() => addProductCart(product.id, product.name)}>añadir al carrito</Button>
                </Card.Body>
            </Card>
        </Col>
    );
}