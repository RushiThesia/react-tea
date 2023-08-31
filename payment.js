import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { paymentbtn1, paymentbtn2, paymentbtn4 } from '../assets/images'
import { Link } from 'react-router-dom'


function Payment() {
    return (
        <>
            <div className='hstack'>
                <Button variant='transparent'>1. My Bag</Button>
                <span class="flex-lg-fill border-lg h-px"></span>

                <Button variant='transparent'>2. Delivery </Button>
                <span class="flex-lg-fill border-lg h-px"></span>

                <Button variant='transparent'>3. Review & Payment </Button>
            </div>


            <section>
                <Container>
                    <Row>
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


                        </Col>

                        <Col>
                            <h5>Payment type</h5>

                            <div className='border d-flex justify-content-center mb-4'>
                                <img className='my-2' src={paymentbtn1} alt='paymentbtn1' />
                            </div>

                            <div className='border mb-4'>
                                <div className=' d-flex align-items-center my-3 ps-3 pb-5 pt-2'>
                                    <h6 className='mt-1'>Credit or Debit card</h6>
                                    <img src={paymentbtn1} style={{ width: 35 }} alt='paymentbtn1' className='ms-3' />
                                    <img src={paymentbtn2} style={{ width: 35 }} alt='paymentbtn2' className='ms-3' />
                                    <img src={paymentbtn4} style={{ width: 35 }} alt='paymentbtn4' className='ms-3' />
                                </div>

                                <div className='mx-3 p-3 '>
                                    <h5>Card Number</h5>
                                    <Form>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Control type="password" placeholder="XXXX      XXXX      XXXX      XXXX" />
                                        </Form.Group>
                                    </Form>
                                    <Row>
                                        <Col>
                                            <h5>Expired date</h5>

                                            <Form>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Control type="password" placeholder="XX/XX" />
                                                </Form.Group>
                                            </Form>
                                        </Col>

                                        <Col>
                                            <h5>CVV</h5>

                                            <Form>
                                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                                    <Form.Control type="password" placeholder="" />
                                                </Form.Group>
                                            </Form>
                                        </Col>
                                    </Row>
                                </div>
                            </div>

                            <div className='d-flex justify-content-center mt-3 mb-5'>
                                <Link to='/payment-successful-page' style={{ width: 540, height: 50 }} className='text-decoration-none text-center py-3 text-dark bg-transparent border border-dark  rounded-0'>ADVANCE PAYMENT</Link>
                            </div>

                        </Col>

                        <Col>
                            <div className='bg-secondary p-4'>
                                <h5>Order summery</h5>

                                <Row>
                                    <div className='d-flex'>
                                        <Col>
                                            <h6 className='text-start mb-4'>Subtotal</h6>
                                        </Col>
                                        <Col>
                                            <h6 className='text-end mb-4'>
                                                €3.90
                                            </h6>
                                        </Col>
                                    </div>

                                    <div className='mt-2'>
                                        <Row>
                                            <div className='d-flex'>
                                                <Col>
                                                    <h6 className='text-start mb-4'>Delivery</h6>
                                                </Col>
                                                <Col>
                                                    <h6 className='text-end mb-4'>
                                                        €3.95
                                                    </h6>
                                                </Col>
                                            </div>
                                        </Row>
                                    </div>

                                    <div className='border-top'>
                                        <Row>
                                            <div className='d-flex align-items-center mt-4'>
                                                <Col>
                                                    <h6 className='text-start'>Total</h6>
                                                </Col>
                                                <Col>
                                                    <h6 className='text-end'>
                                                        €7.85
                                                    </h6>
                                                </Col>

                                            </div>
                                            <p className='text-muted mb-5'>Estimated shipping time: 2 days</p>
                                        </Row>
                                    </div>
                                </Row>

                            </div>
                            <div className='d-flex justify-content-center mt-4'>
                                <Link to='/payment-successful-page' style={{ width: 400, height: 50 }} className='text-decoration-none text-center py-3 text-light bg-dark border-0 rounded-0'>PAY</Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

        </>

    )
}

export default Payment
