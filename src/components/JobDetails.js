import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

import orangebg from '../images/Rectangle Copy 2.png'


export default function JobDetails() {
    return (
        <>
            <Container>

                <Row style={{ width: "80%", margin: "50px auto 0 auto"}} >
                    <Col lg="3">
                        <img src={orangebg} />
                    </Col>
                    <Col className='mt-4'>
                        <div>
                            <h4>
                                Scoot
                            </h4>
                            <a>Scoot.com</a>
                        </div>

                    </Col>
                    <Col className='mt-4 pt-3' lg="3">
                        <Button >
                            <a>Company Site</a>
                        </Button>
                    </Col>

                </Row>
            </Container>

            <Container style={{ width: "80%", margin: "0 auto" }} className='py-5'>
                <Row className='px-5'>
                    <Col>
                        <Row style={{ fontSize: "15px" }}>
                            <Col xs lg="4">
                                <p>
                                    5h ago
                                </p>
                            </Col>

                            <Col xs={6}>
                                <p>
                                    Full Time
                                </p>
                            </Col>
                            <h2 style={{ marginLeft: "15px" }}>
                                Senior Software Engineer
                            </h2>
                        </Row>
                        <Row style={{ color: "#5964E0", fontWeight: "600" }}>
                            <Col>
                                United Kingdom

                            </Col>
                        </Row>
                    </Col>
                    <Col lg="3" className='mt-5'>
                        <Button style={{ backgroundColor: "#5964E0", padding: "5px", width: "80%" }}>Search</Button>
                    </Col>
                    
                        <p className=' mt-4'>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque, aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo, eget blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse potenti. Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus libero, faucibus adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu, fermentum et, dapibus sed, urna.
                        </p>
                <div>
                <h3 className='py-4'>Requirements</h3>
                <p>
                Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet, lectus arcu pulvinar risus, vitae facilisis libero dolor a purus. Sed vel lacus. Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel, tellus. Suspendisse ac urna. Etiam pellentesque mauris ut lectus. Nunc tellus ante, mattis eget, gravida vitae, ultricies ac, leo. Integer leo pede, ornare a, lacinia eu, vulputate vel, nisl.
                </p>

                <ul>
                    <li>Morbi interdum mollis sapien. Sed</li>
                    <li>Morbi interdum mollis sapien. Sed</li>
                    <li>Morbi interdum mollis sapien. Sed</li>
                    <li>Morbi interdum mollis sapien. Sed</li>

                </ul>
                </div>
                <div>
                <h3 className='py-4'>What You Will Do</h3>
                <p>
                Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna a ullamcorper laoreet, lectus arcu pulvinar risus, vitae facilisis libero dolor a purus. Sed vel lacus. Mauris nibh felis, adipiscing varius, adipiscing in, lacinia vel, tellus. Suspendisse ac urna. Etiam pellentesque mauris ut lectus. Nunc tellus ante, mattis eget, gravida vitae, ultricies ac, leo. Integer leo pede, ornare a, lacinia eu, vulputate vel, nisl.
                </p>

                <ol>
                    <li>Morbi interdum mollis sapien. Sed</li>
                    <li>Morbi interdum mollis sapien. Sed</li>
                    <li>Morbi interdum mollis sapien. Sed</li>
                    <li>Morbi interdum mollis sapien. Sed</li>

                </ol>
                </div>
                </Row>
            </Container>

            <Container style={{width:"83%"}} className='mt-5'>
                <Row>
                    <Col lg="7">
                        <h4>Senior Software Engineer</h4>
                        <p>So Digital Inc.</p>
                    </Col>
                    <Col xs lg="5" className='mt-2'>
                        <Button style={{ backgroundColor: "#5964E0", padding: "5px", width: "50%" }}>Search</Button>
                    </Col>
                </Row>
            </Container>
        </>

    )
}
