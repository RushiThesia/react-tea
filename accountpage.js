import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { HiOutlineMail } from 'react-icons/hi';
import { MdArrowForwardIos } from 'react-icons/md';
import { Link } from 'react-router-dom';


function Accountpage() {
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <section className='bg-secondary p-5 mb-5'>

                            <h5 className='text-muted'>Already a customer?</h5>
                            <p className='text-muted'>Welcome back! Sign in for faster checkout.</p>

                            <Form>
                                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                    <Form.Control type="email" placeholder="Email Address" />
                                </Form.Group>
                                <Form.Control
                                    type="password"
                                    id="inputPassword5"
                                    aria-describedby="passwordHelpBlock"
                                    placeholder="Enter your password"
                                />
                            </Form>

                            <Row>
                                <div className='d-flex align-items-center my-2'>
                                    <Col>
                                        <Form>
                                            <Form.Check
                                                inline
                                                label="Please remember me"
                                                name="group1"
                                                className='text-muted my-4'
                                            />
                                        </Form>
                                    </Col>

                                    <Col>
                                        <p className='frgtpswd text-end'>
                                            Forget password?
                                        </p>
                                    </Col>
                                </div>
                            </Row>

                            <div className='d-flex justify-content-center'>
                            <Link to='/delivery' style={{ width: 540, height: 60 }} className='text-decoration-none text-center py-3 text-light bg-dark border-0 rounded-0'>SIGN IN</Link>
                            </div>


                        </section>
                    </Col>

                    <Col>
                        <section className='bg-secondary px-5'>
                            <div className='py-5 px-4 mb-5'>
                                <h4 className='text-muted'>New to our company?</h4>
                                <p className='text-muted'>Create an account for the best experience</p>
                                <div>
                                    <p> <MdArrowForwardIos className='me-2 my-3' /> Modify and track your orders</p>
                                    <p> <MdArrowForwardIos className='me-2 my-3' /> Faster checkout</p>
                                    <p> <MdArrowForwardIos className='me-2 my-3' /> Get a 10% discount for new customer</p>
                                    <div className='d-flex'>
                                    <Link to='/delivery' style={{ width: 300, height: 60  }} className='border border-2 bg-transparent text-dark px-5 py-3 text-decoration-none text-center border-dark mt-3'>CREATE AN ACCOUNT</Link>
                                </div>

                                </div>
                            </div>

                        </section>


                        <section className='bg-secondary  px-5'>
                            <div className='py-5 px-4 mb-5'>
                                <h4 className='text-muted'>Guest checkout</h4>
                                <p className='text-muted'>No ready to become a customer?</p>
                                <div className='d-flex '>
                                    <Link to='/delivery' style={{ width: 300, height: 60  }} className='border border-2 bg-transparent text-dark  py-3 text-decoration-none text-center border-dark mt-3'>CHECKOUT AS GUEST</Link>
                                </div>
                            </div>

                        </section>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Accountpage
