import Button from 'react-bootstrap/Button';
import { Link, useLocation } from 'react-router-dom';
import React, { useState } from 'react'
import { AiOutlineMinus } from 'react-icons/ai';
import { AiOutlinePlus } from 'react-icons/ai';
import { MdArrowForwardIos } from 'react-icons/md';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { teacCollectionCard1, teacCollectionCard2, teacCollectionCard3, teacCollectionCard4, teacCollectionCard5, teacCollectionCard6, teacCollectionCard7, teacCollectionCard8, teacCollectionCard9, paymentbtn1, paymentbtn2, paymentbtn3, paymentbtn4, paymentbtn5 } from '../assets/images';

const TeaCollectionDetails = [
    {
        id: 1,
        img: teacCollectionCard1,
        label1: "Ceylon Ginger ",
        label2: "Cinnamon chai tea ",
        label3: "€4.85 ",
    },
    {
        id: 2,
        img: teacCollectionCard2,
        label1: "Black teas ",
        label2: "Cinnamon chai tea ",
        label3: "€3.85 ",
    },
    {
        id: 3,
        img: teacCollectionCard3,
        label1: "Green teas ",
        label2: "Cinnamon chai tea ",
        label3: "€5.85 ",
    },
    {
        id: 4,
        img: teacCollectionCard4,
        label1: "White teas ",
        label2: "Cinnamon chai tea ",
        label3: "€4.25 ",
    },
    {
        id: 5,
        img: teacCollectionCard5,
        label1: "Matcha ",
        label2: "Cinnamon chai tea ",
        label3: "€4.65 ",
    },
    {
        id: 6,
        img: teacCollectionCard6,
        label1: "Herbal teas ",
        label2: "Cinnamon chai tea ",
        label3: "€4.45 ",
    },
    {
        id: 7,
        img: teacCollectionCard7,
        label1: "Oolong  ",
        label2: "Cinnamon chai tea ",
        label3: "€4.50 ",
    },
    {
        id: 8,
        img: teacCollectionCard8,
        label1: "Rooibos ",
        label2: "Cinnamon chai tea ",
        label3: "€4.00 ",
    },
    {
        id: 9,
        img: teacCollectionCard9,
        label1: "Teaware ",
        label2: "Cinnamon chai tea ",
        label3: "€3.50 ",
    }

];

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

function Mybag() {

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
            <div className='hstack'>
                <Button variant='transparent'>1. My Bag</Button>
                <span class="flex-lg-fill border-lg h-px"></span>

                <Button variant='transparent'>2. Delivery </Button>
                <span class="flex-lg-fill border-lg h-px"></span>

                <Button variant='transparent'>3. Review & Payment </Button>

            </div>

            <section className='my-3'>
                <Container>
                    <Row>
                        <Col>
                            <div className='mb-4'>
                                <Row>

                                    <Col xs="2">
                                        <img style={{ width: 80 }} src={teacCollectionCard1} alt='teacCollectionCard1 ' />
                                    </Col>

                                    <Col md="6">
                                        <div className='vstack h-100'>
                                            <p className='text-start m-0'>Ceylon Ginger Cinnamon
                                                chai tea - 50 g</p>
                                            <Button variant="transparent" className='p-0 mt-auto justify-content-start d-flex'>
                                                Remove
                                            </Button>
                                        </div>
                                    </Col>

                                    <Col>
                                        <div className='vstack h-100'>
                                            <div className='d-flex justify-content-end'>
                                                <Button variant='transparent' onClick={DcsNum}> <AiOutlineMinus /> </Button>
                                                <h3>{count}</h3>
                                                <Button variant='transparent' onClick={IncNum}> <AiOutlinePlus /> </Button>
                                            </div>
                                            <h5 className='text-end mb-0 mt-auto'>€3.90</h5>
                                        </div>
                                    </Col>

                                </Row>
                            </div>

                            <div className='mb-4'>
                                <Row>

                                    <Col xs="2">
                                        <img style={{ width: 80 }} src={teacCollectionCard1} alt='teacCollectionCard1 ' />
                                    </Col>

                                    <Col md="6">
                                        <div className='vstack h-100'>
                                            <p className='text-start m-0'>Ceylon Ginger Cinnamon
                                                chai tea - 50 g</p>
                                            <Button variant="transparent" className='p-0 mt-auto justify-content-start d-flex'>
                                                Remove
                                            </Button>
                                        </div>
                                    </Col>

                                    <Col>
                                        <div className='vstack h-100'>
                                            <div className='d-flex justify-content-end'>
                                                <Button variant='transparent' onClick={DcsNum}> <AiOutlineMinus /> </Button>
                                                <h3>{count}</h3>
                                                <Button variant='transparent' onClick={IncNum}> <AiOutlinePlus /> </Button>
                                            </div>
                                            <h5 className='text-end mb-0 mt-auto'>€3.90</h5>
                                        </div>
                                    </Col>

                                </Row>
                            </div>

                            <div className='mb-4'>
                                <Row>

                                    <Col xs="2">
                                        <img style={{ width: 80 }} src={teacCollectionCard1} alt='teacCollectionCard1 ' />
                                    </Col>

                                    <Col md="6">
                                        <div className='vstack h-100'>
                                            <p className='text-start m-0'>Ceylon Ginger Cinnamon
                                                chai tea - 50 g</p>
                                            <Button variant="transparent" className='p-0 mt-auto justify-content-start d-flex'>
                                                Remove
                                            </Button>
                                        </div>
                                    </Col>

                                    <Col>
                                        <div className='vstack h-100'>
                                            <div className='d-flex justify-content-end align-items-center'>
                                                <Button variant='transparent' onClick={DcsNum}> <AiOutlineMinus /> </Button>
                                                <h3>{count}</h3>
                                                <Button variant='transparent' onClick={IncNum}> <AiOutlinePlus /> </Button>
                                            </div>
                                            <h5 className='text-end mb-0 mt-auto'>€3.90</h5>
                                        </div>
                                    </Col>

                                </Row>
                            </div>

                            <div className='border-top'>
                                <Row>
                                    <div className='d-flex mt-4'>
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
                            </div>

                            <div className='d-flex justify-content-center'>
                                <Link to='/tea-collections' style={{ width: 450 }} className='border border-2 bg-transparent text-dark px-5 py-3 text-decoration-none text-center'>BACK TO SHOPPING</Link>

                            </div>

                        </Col>


                        <Col>
                            <div className='bg-secondary py-5 px-4'>
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
                                        <div className='d-flex'>
                                            <Col>
                                                <h6 className='text-start mt-4'>Total</h6>
                                            </Col>
                                            <Col>
                                                <h6 className='text-end'>
                                                    €7.85
                                                </h6>
                                            </Col>
                                        </div>
                                    </Row>

                                    <p className='text-muted mt-4'>Estimated shipping time: 2 days</p>

                                    <div className='d-flex justify-content-center mt-4'>
                                        <Link to='/account-page' style={{ width: 500 }} className='bg-dark text-light border-0 px-5 py-3 text-decoration-none text-center'>CHECK OUT</Link>
                                    </div>
                                </div>
                            </div>

                            <div className='my-4 bg-secondary py-5 px-4 vstack my-5'>
                                <h4>Payment type</h4>

                                <div className='d-flex justify-content-between'>
                                    <Link to='/account-page'><img src={paymentbtn1} alt='paymentbtn1'></img></Link>
                                    <Link to='/account-page'><img src={paymentbtn2} alt='paymentbtn2'></img></Link>
                                    <Link to='/account-page'><img src={paymentbtn3} alt='paymentbtn3'></img></Link>
                                    <Link to='/account-page'><img src={paymentbtn4} alt='paymentbtn4'></img></Link>
                                    <Link to='/account-page'><img src={paymentbtn5} alt='paymentbtn5'></img></Link>
                                </div>
                            </div>


                            <div className='my-4 bg-secondary py-5 px-4 my-5'>
                                <h4>Delivery and retour</h4>

                                <div>
                                    <p> <MdArrowForwardIos className='me-2 my-3' /> Order before 12:00 and we will ship the same day.</p>
                                    <p> <MdArrowForwardIos className='me-2 my-3' /> Orders made after Friday 12:00 are processed on Monday.</p>
                                    <p> <MdArrowForwardIos className='me-2 my-3' /> To return your articles, please contact us first.</p>
                                    <p> <MdArrowForwardIos className='me-2 my-3' /> Postal charges for retour are not reimbursed.    </p>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='mb-4'>
                <h2 className='text-center mb-4'>Popular this season</h2>
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

export default Mybag;
