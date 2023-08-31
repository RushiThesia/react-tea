import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { } from "../assets/images";
import { BsCup } from 'react-icons/bs';
import { IoMdGift } from 'react-icons/io';
import { FiTruck } from 'react-icons/fi';
import { BsTag } from 'react-icons/bs';
import { collection1, collection2, collection3, collection4, collection5, collection6, collection7, collection8, collection9, blogImg1, blogImg2, navbody1, navbody2 } from "../assets/images";
import { Link } from "react-router-dom";

const cardCollection = [
  {
    id: 1,
    img: collection1,
    label: "BLACK TEA",
  },
  {
    id: 2,
    img: collection2,
    label: "GREEN TEA",

  },
  {
    id: 3,
    img: collection3,
    label: "WHITE TEA",

  },
  {
    id: 4,
    img: collection4,
    label: "MATCHA",
  },
  {
    id: 5,
    img: collection5,
    label: "HERBAL TEA",
  },
  {
    id: 6,
    img: collection6,
    label: "CHAI",
  },
  {
    id: 7,
    img: collection7,
    label: "OOLONG",
  },
  {
    id: 8,
    img: collection8,
    label: "ROOIBOS",
  },
  {
    id: 9,
    img: collection9,
    label: "TEAWARE",
  }
];

function Home() {
  return (
    <>
      <section>
        <div>
          <Container fluid className="gx-0">
            <Row className="gx-0">
              <Col>
                <img className="w-100" src={navbody1} alt="navbody" />
              </Col>

              <Col className="ms-5 d-flex flex-column justify-content-center align-items-center p-5">
                <div>
                  <h2 className="mb-5">Every day is unique,<br /> just like our tea</h2>
                  <h4 className="text-muted mt-2 mb-2">Lorem ipsum dolor sit amet consectetur. Orci nibh  <br /> nullam risus adipiscing odio. Neque lacus nibh eros in. </h4>
                  <h4 className="text-muted mt-1 mb-5">Lorem ipsum dolor sit amet consectetur. Orci nibh  <br /> nullam risus adipiscing odio. Neque lacus nibh eros in. </h4>
                  <div className="d-flex justify-content-start">
                    <Link to='/tea-Collections' variant="border-dark" style={{ width: 250 }} className="text-decoration-none px-4 py-3 mt-4 mb-5 bg-dark text-light text-center">BROWSE TEAS</Link>

                  </div>
                </div>
              </Col>

            </Row>
          </Container>
        </div>
      </section>

      <section>
        <Container fluid>
          <div className="mb-5 bg-secondary">

            <Row className="my-5 text-center gx-0">
              <Col className="mt-4">
                <h6><BsCup /> 450+ KIND OF LOOSEF TEA</h6>
              </Col>
              <Col className="mt-4">
                <h6><IoMdGift /> CERTIFICATED ORGANIC TEAS</h6>
              </Col>
              <Col className="mt-4">
                <h6><FiTruck /> FREE DELIVERY</h6>
              </Col>
              <Col className="mt-4">
                <h6><BsTag /> SAMPLE FOR ALL TEAS</h6>
              </Col>
            </Row>

            <Row className="d-flex justify-content-center">
              <Button variant="transparent border-dark" style={{ width: 250 }} className="px-4 py-3 mb-5 rounded-0">LEARN MORE</Button>
            </Row>
          </div>
        </Container>
      </section>


      <section>
        <Container fluid>
          <h2 className="text-dark d-flex justify-content-center align-items-center mb-5">
            Our Collections
          </h2>

          <Row xl="3" md="2">
            {cardCollection.map((val, index) => {
              return (
                <Col>
                  <Card key={index} className="border-0">
                    <Card.Img variant="top" src={val.img} />
                    <Card.Body className="d-flex justify-content-center">
                      <Card.Title className="mt-4 mb-4">{val.label}</Card.Title>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>

        </Container>
      </section>

      <section className="bg-secondary py-5 mb-4" >
        <Container fluid>
          <h2 className="mb-5 text-center">Last Blog Posts</h2>
          <Row>
            <Col>
              <Row>
                <Col>
                  <img className="w-100" src={blogImg1} />
                </Col>
                <Col>
                  <h3 className="mb-4">
                    HOW TO STEEP TEA <br /> LIKE A PRO
                  </h3>
                  <h5 className="text-muted">
                    Lorem ipsum dolor sit amet <br />, consectetur adipiscing elit, sed <br /> do eiusmod tempor incididunt <br /> ut labore et dolore magna <br /> aliqua. In dictum non <br /> consectetur a erat nam at. <br /> Risus nec feugiat in <br /> fermentum posuere urna nec <br /> tincidunt praesent.
                  </h5>
                  <Button variant="transparent" className="mt-3">READ MORE</Button>
                </Col>
              </Row>
            </Col>

            <Col>
              <Row>
                <Col>
                  <img className="w-100" src={blogImg2} />
                </Col>

                <Col>
                  <h3 className="mb-4">
                    ALL ABOUT TEA <br /> AROMAS
                  </h3>
                  <h5 className="text-muted">
                    Lorem ipsum dolor sit amet <br />, consectetur adipiscing elit, sed <br /> do eiusmod tempor incididunt <br /> ut labore et dolore magna <br /> aliqua. In dictum non <br /> consectetur a erat nam at. <br /> Risus nec feugiat in <br /> fermentum posuere urna nec<br /> tincidunt praesent.
                  </h5>
                  <Button variant="transparent" className="mt-3">READ MORE</Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container fluid className="gx-0 mb-5">
          <Row className="gx-0">
            <Col className="hstack">
              <div className="ps-5">
                <h2 className="mb-5">FOR WHOLESALERS</h2>
                <h4 className="text-muted mt-2 mb-2">We offer loose tea leaves of the best quality <br /> for your business. With a choice of more <br /> than 450 different kinds of loose tea, we can <br /> make a sophisticated selection that fits <br /> exactly in your kind of establishment.   </h4>
                <div className="d-flex justify-content-start">
                  <Button variant="transparent border-dark" className="px-4 py-3 mt-4 mb-5 rounded-0">GET A FREE CONSULTATION</Button>
                </div>
              </div>
            </Col>
            <Col>
              <img className="w-100" src={navbody2} alt="navbody2" />
            </Col>
          </Row>
        </Container>
      </section>

    </>
  )
}

export default Home;