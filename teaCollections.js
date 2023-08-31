import React from 'react'
import { Accordion, Card, Col, Container, Dropdown, Form, Row } from 'react-bootstrap'
import { teaCollectionBody, teacCollectionCard1, teacCollectionCard2, teacCollectionCard3, teacCollectionCard4, teacCollectionCard5, teacCollectionCard6, teacCollectionCard7, teacCollectionCard8, teacCollectionCard9 } from '../assets/images'
import { useNavigate } from 'react-router-dom';

const cardCollection = [
    {
        id: 1,
        img: teacCollectionCard1,
        label1: "Ceylon Ginger ",
        label2: "Cinnamon chai tea ",
        label3: "€4.85 / 50 g ",
    },
    {
        id: 2,
        img: teacCollectionCard2,
        label1: "Black teas ",
        label2: "Cinnamon chai tea ",
        label3: "€3.85 / 50 g ",
    },
    {
        id: 3,
        img: teacCollectionCard3,
        label1: "Green teas ",
        label2: "Cinnamon chai tea ",
        label3: "€5.85 / 50 g ",
    },
    {
        id: 4,
        img: teacCollectionCard4,
        label1: "White teas ",
        label2: "Cinnamon chai tea ",
        label3: "€4.25 / 50 g ",
    },
    {
        id: 5,
        img: teacCollectionCard5,
        label1: "Matcha ",
        label2: "Cinnamon chai tea ",
        label3: "€4.65 / 50 g ",
    },
    {
        id: 6,
        img: teacCollectionCard6,
        label1: "Herbal teas ",
        label2: "Cinnamon chai tea ",
        label3: "€4.45 / 50 g ",
    },
    {
        id: 7,
        img: teacCollectionCard7,
        label1: "Oolong  ",
        label2: "Cinnamon chai tea ",
        label3: "€4.50 / 50 g ",
    },
    {
        id: 8,
        img: teacCollectionCard8,
        label1: "Rooibos ",
        label2: "Cinnamon chai tea ",
        label3: "€4.00 / 50 g ",
    },
    {
        id: 9,
        img: teacCollectionCard9,
        label1: "Teaware ",
        label2: "Cinnamon chai tea ",
        label3: "€3.50 / 50 g ",
    }
];

function TeaCollections() {
    const navigate = useNavigate()
    const handleClick = (id) => {
        navigate("/product-details", {
            state: { id: id }
        })
    }
    return (
        <>
            <div className='mb-5 '>
                
                    <img className='w-100' src={teaCollectionBody} alt='teaCollectionBody' />
            </div>

            <div className='d-flex flex-column ms-5'>
                <p>HOME/COLLECTIONS/CHAI</p>
            </div>

            <Container fluid>
                <Row>
                    <Col lg="3">
                        <div className='d-flex flex-column ms-5'>

                            <Accordion className='accordion-flush border-bottom' defaultActiveKey="1">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>COLLECTIONS <span className='span-1'> (1)</span>
                                    </Accordion.Header>
                                    <Accordion.Body>
                                        <Form.Check
                                            label="Black teas"
                                            name="group1"
                                        />
                                        <Form.Check
                                            label="Green teas"
                                            name="group1"
                                        />
                                        <Form.Check
                                            label="White teas"
                                            name="group1"
                                        />
                                        <Form.Check
                                            label="Chai"
                                            name="group1"
                                        />
                                        <Form.Check
                                            label="Matcha"
                                            name="group1"
                                        />
                                        <Form.Check
                                            label="Herbal teas"
                                            name="group1"
                                        />
                                        <Form.Check
                                            label="Oolong"
                                            name="group1"
                                        />
                                        <Form.Check
                                            label="Rooibos"
                                            name="group1"
                                        />
                                        <Form.Check
                                            label="Teaware"
                                            name="group1"
                                        />
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>

                            <Accordion className='accordion-flush border-bottom' defaultActiveKey="1">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>ORIGIN</Accordion.Header>
                                    <Accordion.Body>
                                        <Form.Check
                                            label="India"
                                            name="group1"
                                        />
                                        <Form.Check
                                            label="Japan"
                                            name="group1"
                                        />
                                        <Form.Check
                                            label="Iran"
                                            name="group1"
                                        />
                                        <Form.Check
                                            label="South Africa "
                                            name="group1"
                                        />
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>

                            <Accordion className='accordion-flush border-bottom' defaultActiveKey="1">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>FLAVOUR</Accordion.Header>
                                    <Accordion.Body>
                                        <Form.Check
                                            label="Spicy"
                                            name="group1"
                                        />
                                        <Form.Check
                                            label="Sweet"
                                            name="group1"
                                        />
                                        <Form.Check
                                            label="Citrus"
                                            name="group1"
                                        />
                                        <Form.Check
                                            label="Smooth"
                                            name="group1"
                                        />
                                        <Form.Check
                                            label="Fruity"
                                            name="group1"
                                        />
                                        <Form.Check
                                            label="Floral"
                                            name="group1"
                                        />
                                        <Form.Check
                                            label="Grassy"
                                            name="group1"
                                        />
                                        <Form.Check
                                            label="Minty"
                                            name="group1"
                                        />
                                        <Form.Check
                                            label="Bitter"
                                            name="group1"
                                        />
                                        <Form.Check
                                            label="Creamy"
                                            name="group1"
                                        />
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>

                            <Accordion className='accordion-flush border-bottom' defaultActiveKey="1">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>QUALITIES</Accordion.Header>
                                    <Accordion.Body>
                                        <Form.Check
                                            label="Detox"
                                            name="group1"
                                        />
                                        <Form.Check
                                            label="Energy"
                                            name="group1"
                                        />
                                        <Form.Check
                                            label="Relax"
                                            name="group1"
                                        />
                                        <Form.Check
                                            label="Digestion"
                                            name="group1"
                                        />
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>

                            <Accordion className='accordion-flush border-bottom' defaultActiveKey="1">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>CAFEINE</Accordion.Header>
                                    <Accordion.Body>
                                        <Form.Check
                                            label="No Caffeine"
                                            name="group1"
                                        />
                                        <Form.Check
                                            label="Low Caffeine"
                                            name="group1"
                                        />
                                        <Form.Check
                                            label="Medium Caffeine"
                                            name="group1"
                                        />
                                        <Form.Check
                                            label="High Caffeine"
                                            name="group1"
                                        />
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>

                            <Accordion className='accordion-flush border-bottom' defaultActiveKey="1">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>ALLERGENS</Accordion.Header>
                                    <Accordion.Body>
                                        <Form.Check
                                            label="No Caffeine"
                                            name="group1"
                                        />
                                        <Form.Check
                                            label="Low Caffeine"
                                            name="group1"
                                        />
                                        <Form.Check
                                            label="Medium Caffeine"
                                            name="group1"
                                        />
                                        <Form.Check
                                            label="High Caffeine "
                                            name="group1"
                                        />
                                    </Accordion.Body>
                                </Accordion.Item>
                            </Accordion>

                            <Form className='d-flex ms-3 mt-2'>
                                <div className='me-2'>ORGANIC</div>

                                <Form.Check
                                    type="switch"
                                    id="custom-switch"
                                />
                            </Form>

                        </div>
                    </Col>

                    <Col lg="9">

                        <div className='d-flex justify-content-end mb-5'>
                            <Dropdown>
                                <Dropdown.Toggle variant="transparent" id="dropdown-basic">
                                    SORT BY
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">Price- High To Low</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Price- Low To High</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Ratings- High To Low </Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Ratings- Low To High </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
        
                        <Row xl="3" md="2">
                            {cardCollection.map((val, index) => {
                                return (
                                    <Col>
                                        <Card key={index} className="border-0 mb-4" onClick={() => handleClick(val?.id)}>
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
                    </Col>
                </Row>
            </Container>

        </>
    )
}

export default TeaCollections;