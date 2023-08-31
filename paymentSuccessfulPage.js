import React, { useState } from 'react'
import { teacCollectionCard1, teacCollectionCard2, teacCollectionCard7 } from '../assets/images'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function PaymentSuccessfulPage() {


    const cardCollection = [
        {
            id: 1,
            img: teacCollectionCard7,
            label1: "Ceylon Ginger",
            label2: "Cinnamon chai tea ",
            label3: "€4.85 / 50 g ",
        },
        {
            id: 2,
            img: teacCollectionCard2,
            label1: "Ceylon Ginger ",
            label2: "Cinnamon chai tea ",
            label3: "€4.85 / 50 g ",
        },
        {
            id: 3,
            img: teacCollectionCard1,
            label1: "Ceylon Ginger ",
            label2: "Cinnamon chai tea ",
            label3: "€4.85 / 50 g ",
        },
    
    ];
    const [count, setCount] = useState(0);
    const IncNum = () => {
        setCount(count + 1);
    }
    const DcsNum = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    }
    return (
        <>
            <div>
                <h4 className='text-center'>THANK YOU!</h4>
                <p className='text-center'>We received your order and will start preparing your package right away. <br />
                    You will receive a confirmation email in a moment.</p>
                <h4 className='text-center'>Order details - 8972491047359</h4>
            </div>

            <section className='p-5'>
                <div>
                    <Row>
                        <Col>

                            <div className='mb-3'>
                                <Row>
                                    <Col xs="2">
                                        <img className='p-0' style={{ width: 80 }} src={teacCollectionCard1} alt="teacCollectionCard1" />
                                    </Col>
                                    <Col md="6">
                                        <div className='vstack h-100'>
                                            <p className='text-start m-0'>Ceylon Ginger Cinnamon chai tea - 50 g</p>
                                        </div>
                                    </Col>

                                    <Col>
                                        <h5 className='text-end mb-0 mt-auto'>€3.90</h5>
                                    </Col>
                                </Row>
                            </div>


                            <div className='mb-3'>
                                <Row>
                                    <Col xs="2">
                                        <img className='p-0' style={{ width: 80 }} src={teacCollectionCard1} alt="teacCollectionCard1" />
                                    </Col>
                                    <Col md="6">
                                        <div className='vstack h-100'>
                                            <p className='text-start m-0'>Ceylon Ginger Cinnamon chai tea - 50 g</p>
                                        </div>
                                    </Col>

                                    <Col>
                                        <h5 className='text-end mb-0 mt-auto'>€3.90</h5>
                                    </Col>
                                </Row>

                            </div>

                            <div className='mb-3'>
                                <Row>
                                    <Col xs="2">
                                        <img className='p-0' style={{ width: 80 }} src={teacCollectionCard1} alt="teacCollectionCard1" />
                                    </Col>
                                    <Col md="6">
                                        <div className='vstack h-100'>
                                            <p className='text-start m-0'>Ceylon Ginger Cinnamon chai tea - 50 g</p>
                                        </div>
                                    </Col>

                                    <Col>
                                        <h5 className='text-end mb-0 mt-auto'>€3.90</h5>
                                    </Col>
                                </Row>
                            </div>

                            <div>

                                <Row>
                                    <div className='d-flex my-3'>
                                        <Col>
                                            <h6 className='text-start'>Subtotal</h6>
                                        </Col>
                                        <Col>
                                            <h6 className='text-end'>
                                                €3.90
                                            </h6>
                                        </Col>
                                    </div>
                                </Row>

                                <div className='mt-2'>
                                    <Row>
                                        <div className='d-flex my-3'>
                                            <Col>
                                                <h6 className='text-start'>Delivery</h6>
                                            </Col>
                                            <Col>
                                                <h6 className='text-end'>
                                                    €3.95
                                                </h6>
                                            </Col>
                                        </div>
                                    </Row>
                                </div>
                            </div>


                            <div className='border-top'>
                                <Row>
                                    <div className='d-flex my-3'>
                                        <Col>
                                            <h6 className='text-start'>Total</h6>
                                        </Col>
                                        <Col>
                                            <h6 className='text-end'>
                                                €7.85
                                            </h6>
                                        </Col>
                                    </div>
                                </Row>

                            </div>

                        </Col>


                        <Col>
                            <h5 className='mb-3'>Delivery Details</h5>
                            <h6 className='mb-3'>Shipping address</h6>
                            <p className='text-muted'>3 Falahi St , Falahi Ave, <br /> Pasdaran Blvd, Fars Province, <br /> Shiraz<br /> 71856-95159<br /> Iran</p>

                            <div className='my-4'>
                                <h6>Billing address</h6>
                                <p className='text-muted'>Same as shipping address</p>
                            </div>

                            <div className='my-4'>
                                <h6>Contact information</h6>
                                <p className='text-muted'>amoopur@gmail.com</p>
                            </div>


                            <div className='d-flex flex-column align-items-end mb-3'>
                                <Link to='/tea-collections' style={{ width: 300 }} className='bg-dark text-light border-0 px-5 py-3 text-decoration-none text-center mb-3'>KEEP SHOPPING</Link>
                           
                                <Link to='/print-receipt' style={{ width: 300 }} className='bg-transparent text-dark border  px-5 py-3 text-decoration-none text-center'>PRINT RECEIPT</Link>
                            </div>

                        </Col>



                        <Col>
                            <div>
                                <h5 className='mb-3'>Payment method</h5>
                                <p className='mb-3'>Master card</p>
                                <p className='mb-3'>XXXX   XXXX   XXXX   5425</p>
                            </div>

                            <div>
                                <h5 className='mb-3'>Estimated shipping</h5>
                                <p className='mb-3'>16 June 2024</p>
                            </div>


                        </Col>

                    </Row>
                </div>
            </section>

            <section className='mb-4'>
                <h2 className='text-center mb-4'>Suggested items base on your order</h2>
                <Container>
                    <Row xl="3" md="2">
                        {cardCollection.map((val, index) => {
                            return (
                                <Col>
                                    <Card key={index} className="border-0 mb-4">
                                        <Card.Img variant="top" src={val.img} />
                                        <Card.Body className="d-flex justify-content-center">
                                            <div className='d-flex flex-column'>
                                                <Card.Title className="my-1">{val.label1}</Card.Title>
                                                <Card.Text className="my-1">{val.label2}</Card.Text>
                                                <Card.Text className="my-1">{val.label3}</Card.Text>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            );
                        })}
                    </Row>
                </Container>

            </section>

        </>
    )
}

export default PaymentSuccessfulPage

