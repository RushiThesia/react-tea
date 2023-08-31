import React, { useState } from 'react'
import { Button, Card, Col, Container, Modal, Row } from 'react-bootstrap';
import { ImSphere } from 'react-icons/im';
import { GoGift } from 'react-icons/go';
import { LuLeaf } from 'react-icons/lu';
import { AiOutlineMinus } from 'react-icons/ai';
import { AiOutlinePlus } from 'react-icons/ai';
import { RiCupLine } from 'react-icons/ri';
import { MdOutlineWaterDrop } from 'react-icons/md';
import { BsAlarm } from 'react-icons/bs';
import { BsCircleFill } from 'react-icons/bs';
import { sampler, kg1, g50, g100, g170, g250 } from '../assets/images';
import { Link, useLocation } from 'react-router-dom';
import { teacCollectionCard1, teacCollectionCard2, teacCollectionCard3, teacCollectionCard4, teacCollectionCard5, teacCollectionCard6, teacCollectionCard7, teacCollectionCard8, teacCollectionCard9 } from '../assets/images';

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

function ProductDetails() {                                                             

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [count, setCount] = useState(0);
  const IncNum = () => {
    setCount(count + 1);
  }
  const DcsNum = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  }

  const { state } = useLocation();
  const findData = TeaCollectionDetails.find((item) => item.id === state.id)

  return (
    <>
      <h6>HOME/COLLECTIONS/CHAI/CEYLON GINGER CINNAMON CHAI TEA</h6>

      <Container>

        <Row>
          <Col lg="5">
            <img className='w-100' src={findData.img} alt='teacCollectionCard4 ' />
          </Col>

          <Col lg="7">

            <div className='pb-5 ps-5'>
              <h2 className='mb-4'>{findData.label1}</h2>

              <h6 className='mb-4'>{findData.label2}</h6>

              <div className='d-flex justify-content-start  mb-4'>
                <div className='d-flex align-items-center'>
                  <ImSphere /> Origin: Iran
                </div>
                <div className='d-flex align-items-center ms-4'>
                  <GoGift /> Organic
                </div>
                <div className='d-flex align-items-center ms-4'>
                  <LuLeaf /> Vegan
                </div>
              </div>

              <div className='mt-2  mb-4'>
                <h2>
                  {findData.label3}
                </h2>
              </div>

              <div>
                <h6 className=' mb-4'>Variants</h6>
              </div>

              <div className='mb-4'>
                <Row>
                  <Col className='d-flex align-items-center flex-column'>
                    <img src={g50} alt="g50" />
                    <p>50 g bag</p>
                  </Col>

                  <Col className='d-flex align-items-center flex-column'>
                    <img src={g100} alt="g100" />
                    <p>100 g bag</p>
                  </Col>

                  <Col className='d-flex align-items-center flex-column'>
                    <img src={g170} alt="g170" />
                    <p>170 g bag</p>
                  </Col>

                  <Col className='d-flex align-items-center flex-column'>
                    <img src={g250} alt="g250" />
                    <p>250 g bag</p>
                  </Col>

                  <Col className='d-flex align-items-center flex-column'>
                    <img src={kg1} alt="kg1" />
                    <p>1 kg bag</p>
                  </Col>

                  <Col className='d-flex align-items-center flex-column'>
                    <img src={sampler} alt="sampler" />
                    <p>sampler</p>
                  </Col>
                </Row>
              </div>

              <div className='d-flex align-items-center'>
                <Button variant='transparent' onClick={DcsNum}> <AiOutlineMinus /> </Button>
                <h3>{count}</h3>
                <Button variant='transparent' onClick={IncNum}> <AiOutlinePlus /> </Button>

                <div className='ms-3'>
                  <Button className='bg-dark border-0 py-3 px-5 rounded-0' onClick={handleShow}>
                    ADD TO BAG
                  </Button>

                  <Modal show={show} onHide={handleClose} className='modals'>
                    <Modal.Header closeButton className='border-0'>
                      <Modal.Title><p className='text-muted'>My Bag</p></Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <Row>
                        <Col xs="2">
                          <img className='p-0' style={{ width: 80 }} src={findData.img} alt="teacCollectionCard1" />
                        </Col>

                        <Col md="6">
                          <div className='vstack h-100'>
                            {/* <p className='text-start m-0'>Ceylon Ginger Cinnamon
                              chai tea - 50 g</p> */}
                            <p className='text-start m-0'>{findData.label1}</p>
                            <Button variant="transparent" onClick={handleClose} className='p-0 mt-auto justify-content-start d-flex'>
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
                            {/* <h5 className='text-end mb-0 mt-auto'>€3.90</h5> */}
                            <h5 className='text-end mb-0 mt-auto'>{findData.label3}</h5>
                          </div>
                        </Col>
                      </Row>
                    </Modal.Body>

                    <div style={{ height: 350 }}></div>

                    <Modal.Body className='border-top'>
                      <Row>
                        <div className='d-flex'>
                          <Col>
                            <h6 className='text-start'>Subtotal</h6>
                          </Col>
                          <Col>
                            <h6 className='text-end'>
                              {findData.label3}
                            </h6>
                          </Col>
                        </div>
                      </Row>

                      <div className='mt-2'>
                        <Row>
                          <div className='d-flex'>
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
                    </Modal.Body>

                    <Modal.Body className='border-top'>
                      <Row>
                        <div className='d-flex'>
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
                    </Modal.Body>

                    <Modal.Body className='border-top d-flex justify-content-center'>
                      <Link to='/my-bag' style={{ width: 500 }} className='bg-dark text-light border-0 px-5 py-3 text-decoration-none text-center'>PURCHASE</Link>
                    </Modal.Body>

                  </Modal>
                </div>
              </div>

            </div>
          </Col>
        </Row>

      </Container>



      <section className='bg-secondary my-5'>
        <Container>

          <Row>
            <Col>

              <div className='my-3'>
                <h4>Steeping instructions</h4>
                <p className='d-flex align-items-center'><RiCupLine className='me-2' />SERVING SIZE: 2 tsp per cup, 6 tsp per pot</p>
                <hr style={{ width: 300 }} />
                <p className='d-flex align-items-center'><MdOutlineWaterDrop className='me-2' />WATER TEMPERATURE:  100°C</p>
                <hr style={{ width: 300 }} />
                <p className='d-flex align-items-center'><BsAlarm className='me-2' />STEEPING TIME: 3 - 5 minutes</p>
                <hr style={{ width: 300 }} />
                <p className='d-flex align-items-center'><BsCircleFill className='me-2' />COLOR AFTER 3 MINUTES</p>
              </div>
            </Col>

            <Col>
              <div className='my-3'>
                <h4>About this tea</h4>
              </div>

              <Row>
                <Col>
                  <div className='border-end'>
                    <h5>FLAVOR</h5>
                    <p>Spicy</p>
                  </div>
                </Col>

                <Col>
                  <div className='border-end ms-2'>
                    <h5>QUALITIES</h5>
                    <p>Smoothing</p>
                  </div>
                </Col>

                <Col>
                  <div className='border-end ms-2'>
                    <h5>CAFFEINE</h5>
                    <p>Medium</p>
                  </div>
                </Col>

                <Col>
                  <h5>ALLERGENS</h5>
                  <p>Nuts-free</p>
                </Col>
              </Row>

              <div className='my-3'>
                <h4>Ingredient</h4>
                <p>Black Ceylon tea, Green tea, Ginger root, Cloves, Black pepper,<br /> Cinnamon sticks, Cardamom, Cinnamon pieces.</p>
              </div>

            </Col>
          </Row>
        </Container>
      </section>

      <section className='mb-4'>

        <h2 className='text-center mb-4'>You may also like</h2>

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

export default ProductDetails;
