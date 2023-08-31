import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Delivery() {
    return (
        <div>
            <div className='hstack'>
                <Button variant='transparent'>1. My Bag</Button>
                <span class="flex-lg-fill border-lg h-px"></span>

                <Button variant='transparent'>2. Delivery </Button>
                <span class="flex-lg-fill border-lg h-px"></span>

                <Button variant='transparent'>3. Review & Payment </Button>

            </div>

            <section className='my-5'>
                <Container>
                    <Row>
                        <Col>
                            <h6>Shipping Address</h6>

                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Control type="email" placeholder="First Name" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Control type="email" placeholder="Last Name" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Control type="email" placeholder="Street and  house number" />
                                </Form.Group>

                                <Row>
                                    <Col>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Control type="email" placeholder="PostCode" />
                                        </Form.Group>
                                    </Col>

                                    <Col>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                            <Form.Control type="email" placeholder="City" />
                                        </Form.Group>
                                    </Col>
                                </Row>

                                <div class="input-group mb-3">
                                    <select class="custom-select country-select bg-transparent border-1 text-muted rounded-2 border-info">
                                        <option selected>Country</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>


                            </Form>
                        </Col>


                        <Col>
                            <div className='ms-1'>
                                <h6>Billing Address</h6>
                                <p className='text-muted'>(Same as shipping address)</p>

                                <Form.Check
                                    inline
                                    label="Bill to different address"
                                    name="group1"
                                    className='text-muted mt-4'
                                />

                                <h6 className=' my-4'>Contact Information</h6>

                                <Form>
                                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                        <Form.Control type="email" placeholder="Email Address" />
                                    </Form.Group>
                                </Form>
                            </div>
                        </Col>

                        <Col>
                            <div className='px-4'>
                                <h6 className='mb-4'>Order summery</h6>

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
                                </Row>

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

                                    <div className='d-flex justify-content-center'>
                                        <Link to='/payment' style={{ width: 540, height: 50 }} className='text-decoration-none text-center py-3 text-light bg-dark border-0 rounded-0'>GO TO PAYMENT</Link>
                                    </div>

                                </div>

                            </div>
                        </Col>
                    </Row>



                </Container>
            </section>
        </div>
    )
}

export default Delivery