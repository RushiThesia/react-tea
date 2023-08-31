import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { LuMapPin } from 'react-icons/lu';
import { HiOutlineMail } from 'react-icons/hi';
import { BsTelephone } from 'react-icons/bs';



function Footer() {
  return (
    <>
      <section className='bg-secondary py-5'>
        <Container fluid>
          <div className='ps-5'>
            <Row>
              <Col>
                <h5 className='mb-3'>COLLECTIONS</h5>
                <div className='text-left'>
                  <ul>
                    <li>
                      <a>Black teas</a>
                    </li>
                    <li>
                      <a>Green teas</a>
                    </li>
                    <li>
                      <a>Herbal teas</a>
                    </li>
                    <li>
                      <a>Matcha</a>
                    </li>
                    <li>
                      <a>Chai</a>
                    </li>
                    <li>
                      <a>Oolong</a>
                    </li>
                    <li>
                      <a>Rooibos</a>
                    </li>
                    <li>
                      <a>Teaware</a>
                    </li>
                  </ul>
                </div>
              </Col>

              <Col>
                <h5 className='mb-3'>LEARN</h5>
                <ul>
                  <li>
                    <a>About us</a>
                  </li>
                  <li>
                    <a>About our teas</a>
                  </li>
                  <li>
                    <a>Tea Academy</a>
                  </li>
                </ul>
              </Col>

              <Col>
                <h5 className='mb-3'>CUSTOMER SERCVICES</h5>
                <ul>
                  <li>
                    <a>Ordering and payment</a>
                  </li>
                  <li>
                    <a>Delivery</a>
                  </li>
                  <li>
                    <a>Privacy and Policy</a>
                  </li>
                  <li>
                    <a>Terms & Conditions</a>
                  </li>
                </ul>
              </Col>

              <Col>
                <h5>CONTACT US</h5>
                <ul>
                  <li className='d-flex'>
                    <div><LuMapPin /></div>
                    <div>3 Falahi, Falahi St, Pasdaran Ave, <br /> Shiraz, Fars Provieence <br /> Iran</div>
                  </li>
                  <li className='mb-2'>
                    <HiOutlineMail /><a> Email: amoopur@gmail.com</a>
                  </li>
                  <li className='mb-2'>
                    <BsTelephone /><a> Tel: +98 9173038406 </a>
                  </li>
                </ul>

              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Footer;
