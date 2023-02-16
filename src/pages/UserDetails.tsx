import React from 'react';
import { Container, Card, Row, Col, Button } from 'react-bootstrap';

const UserDetails = () => {
    return (
        <>
            <div className='app-page'>
                <Container fluid className="p-4">
                    <Row>
                        <Col>
                            <h6>User Details</h6>
                        </Col>
                        <Col>
                            <div className='d-flex'>
                                <Button>BLACKLIST USER</Button>
                                <Button>ACTIVATE USER</Button>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Card border='light'>
                                <Row>
                                    <Col>
                                        <div>

                                        </div>
                                        <div>
                                            <h6>Grace Effiom</h6>
                                            <p>LSQFf587g90</p>
                                        </div>
                                    </Col>

                                    <Col>
                                        <h6>User's Tier</h6>
                                    </Col>
                                    <Col>
                                        <h6>300,000</h6>
                                        <p>992049300230/Providus Bank</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        General Details
                                    </Col>
                                    <Col>
                                        Documents
                                    </Col>
                                    <Col>
                                        Bank Details
                                    </Col>
                                    <Col>
                                        Loans
                                    </Col>
                                    <Col>
                                        Savings Details
                                    </Col>
                                    <Col>
                                        App and System
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                            <Card border='light'>

                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default UserDetails;