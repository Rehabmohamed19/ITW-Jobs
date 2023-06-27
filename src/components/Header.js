import React from 'react'
import './Header.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import toggle from '../images/Group 15.png'
import background from '../images/Triangle.png'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import searchIcon from '../images/003-search 2.png'
import location from '../images/placeholder 2.png'
import Rectangle from '../images/Rectangle.png'




export default function Header() {
    return (
        <>
            <Navbar className="bg-body-tertiary"  style={{ backgroundImage: `url(${background})`, height: "160px" , position:"relative"}}>
                <Container className='nav-background' >
                    <Navbar.Brand href="#home" className='logo-font' style={{ color: "white" }}>devjobs</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Navbar.Text>
                            <img src={toggle} />
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Container className='overlay-container'>
                <Row className=' overlay-row'>
                    <Col xs lg="5">
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Row>
                                    <Col lg="0" style={{ marginTop: "5px" }}>
                                        <Form.Label>
                                            <img src={searchIcon} />
                                        </Form.Label>
                                    </Col>
                                    <Col xs={8}>
                                        <Form.Control style={{ border: "none" }} type="email" placeholder="Filter by title, companies, expertise…" />
                                    </Col>
                                </Row>
                            </Form.Group>

                        </Form>
                    </Col>
                    <Col>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Row>
                                    <Col lg="0" style={{ marginTop: "5px" }}>
                                        <Form.Label>
                                            <img src={location} />
                                        </Form.Label>
                                    </Col>
                                    <Col xs={10}>
                                        <Form.Control style={{ border: "none" }} type="email" placeholder="Filter by location…" />
                                    </Col>
                                </Row>
                            </Form.Group>

                        </Form>
                    </Col>
                    <Col>
                        <Row className="justify-content-md-center" style={{marginTop:"7px"}}>
                            <Col lg="2" style={{marginTop:"5px"}} >
                            <img src={Rectangle}/>
                            </Col>
                            <Col style={{marginTop:"5px"}}>Full Time Only</Col>
                            <Col lg="5">
                                <Button style={{ backgroundColor:"#5964E0" , padding:"5px", width:"80%"}}>Search</Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

        </>
    )
}
