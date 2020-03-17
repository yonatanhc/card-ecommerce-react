import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Loading from '../../components/Loading';
import Product from '../../components/Product';

export default function Products(props) {
    const { products: { result, loading, error }, addProductCart } = props;

    return (
        <Container>
            <Row>
                {loading || !result ? (
                    <Loading />
                ) : (
                        result.map((product, index) => (

                            <Product key={index} product={product} addProductCart={addProductCart} />


                        ))
                    )}
            </Row>
        </Container>
    );
}