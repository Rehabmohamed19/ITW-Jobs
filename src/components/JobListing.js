// import React from 'react'
// import './JobListing.css'

// export default function JobListing() {
//   return (
//     <div>JobListing</div>
//   )
// }
import React from 'react';
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol
} from 'mdb-react-ui-kit';
import Container from 'react-bootstrap/esm/Container';
import compLogo from '../images/Group 3.png'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function JobListing() {

    const [users, setUsers] = useState([])

  const fetchUserData = () => {
    fetch("https://cors-anywhere.herokuapp.com/https://serpapi.com/search.json?engine=google_jobs")
    
    .then(response => {
        return response.json()
      })
      .then(data => {
        console.log(data)
      })
  }
  useEffect(() => {
    fetchUserData()
  }, [])
    return (
        <>
            <Container className='mt-5'>
                <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
                    <MDBCol className="row-cols-md-4">
                        <Link to="/contact"> 
                        <MDBCard className=''>
                            <MDBCardImage
                                src={compLogo}
                                alt='...'
                                position='top'
                                style={{ marginTop: "-20px", width: "50px", height: "50px" }}

                            />
                            <MDBCardBody>
                                <MDBCardTitle>
                                    <Row style={{fontSize:"15px"}}>
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

                                    </Row>
                                </MDBCardTitle>
                                <MDBCardText>
                                   <h4>
                                   Senior Software Engineer
                                   </h4>
                                </MDBCardText>
                                <MDBCardText>
                                   <p>
                                    Scoot
                                   </p>
                                </MDBCardText>
                                <MDBCardText className="mt-4" style={{color:"#5964E0" , fontWeight:"600"}}>
                                   <p>
                                   United Kingdom
                                   </p>
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                        </Link>
                    </MDBCol>
                    <MDBCol className="row-cols-md-4">
                        <MDBCard className=''>
                            <MDBCardImage
                                src={compLogo}
                                alt='...'
                                position='top'
                                style={{ marginTop: "-20px", width: "50px", height: "50px" }}

                            />
                            <MDBCardBody>
                                <MDBCardTitle>
                                    <Row style={{fontSize:"15px"}}>
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

                                    </Row>
                                </MDBCardTitle>
                                <MDBCardText>
                                   <h4>
                                   Senior Software Engineer
                                   </h4>
                                </MDBCardText>
                                <MDBCardText>
                                   <p>
                                    Scoot
                                   </p>
                                </MDBCardText>
                                <MDBCardText className="mt-4" style={{color:"#5964E0" , fontWeight:"600"}}>
                                   <p>
                                   United Kingdom
                                   </p>
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol className="row-cols-md-4">
                        <MDBCard className=''>
                            <MDBCardImage
                                src={compLogo}
                                alt='...'
                                position='top'
                                style={{ marginTop: "-20px", width: "50px", height: "50px" }}

                            />
                            <MDBCardBody>
                                <MDBCardTitle>
                                    <Row style={{fontSize:"15px"}}>
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

                                    </Row>
                                </MDBCardTitle>
                                <MDBCardText>
                                   <h4>
                                   Senior Software Engineer
                                   </h4>
                                </MDBCardText>
                                <MDBCardText>
                                   <p>
                                    Scoot
                                   </p>
                                </MDBCardText>
                                <MDBCardText className="mt-4" style={{color:"#5964E0" , fontWeight:"600"}}>
                                   <p>
                                   United Kingdom
                                   </p>
                                </MDBCardText>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </Container>
        </>
    );
}