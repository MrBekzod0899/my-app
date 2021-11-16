import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Container, Row } from 'reactstrap'
import './footer.css'
import 'aos'
import Aos from 'aos'
Aos.init();

export default function Footer() {
    return (
        <>
            
            <Container fluid={true} className="footer">
                <Row>
                    <Col className="col-lg-4 col-md-4 col-sm-12 col-12" data-aos="fade-right">
                        <h1>Maktab Ma'lumoti</h1>
                        <h5>Samarqand viloyati Samarqand tumani Qo'lbai poyon MFY 33- IDUM</h5>
                        <p>samtuzedu33@gmail.com</p>
                    </Col>
                    <Col className="col-lg-4 col-md-4 col-sm-12 col-12" data-aos="fade-up">
                             <div className="top">
                                <h1>Bizning Maktabimiz</h1>
                            </div>
                            <p><Link to="/">Bosh Sahifa</Link></p>
                            <p><Link to="/maktab-hayoti">Maktab hayoti</Link></p>
                            <p><Link to="/qabul">Qabul</Link></p>
                        
                    </Col>
                    <Col className="col-lg-4 col-md-4 col-sm-12 col-12" data-aos="fade-down" >
                        <div className="top">
                            <h1>Maktab Hayoti</h1> 
                        </div>
                            <p ><Link to="/yangiliklar">News</Link></p>
                            <p ><Link to="/mamuriyat"  >Maktab-ma'muriyati</Link></p>
                            <p ><Link to="/alochilar">Maktab a'lochilari</Link></p>
                    </Col>
                </Row>
            </Container>

            
        </>
    )
}
