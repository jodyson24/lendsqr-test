import React from 'react';
import { Card, Col, Container, Row, Table } from 'react-bootstrap';

import users_icon from '../images/iconubig.svg'
import usersf_icon from '../images/iconusbig.svg'
import ff_icon from '../images/iconuslbig.svg'
import ss_icon from '../images/iconussbig.svg'

const Dashboard = () => {
    return (
        <>
            <div className='app-page'>
                <Container fluid className="p-4">
                    <h6>Users</h6>

                    <Row className='mb-5'>
                        <Col>
                            <Card className='p-3'>
                                <span>
                                    <img src={users_icon} alt="icon" />
                                </span>
                                <h5>Users</h5>
                                <h4>Figures</h4>
                            </Card>
                        </Col>

                        <Col>
                            <Card className='p-3'>
                                <span>
                                    <img src={usersf_icon} alt="icon" />
                                </span>
                                <h6>Users</h6>
                                <h5>Figures</h5>
                            </Card>
                        </Col>

                        <Col>
                            <Card className='p-3'>
                                <span>
                                    <img src={ff_icon} alt="icon" />
                                </span>
                                <h6>Users</h6>
                                <h5>Figures</h5>
                            </Card>
                        </Col>

                        <Col>
                            <Card className='p-3'>
                                <span>
                                    <img src={ss_icon} alt="icon" />
                                </span>
                                <h6>Users</h6>
                                <h5>Figures</h5>
                            </Card>
                        </Col>
                    </Row>

                    <Row className='m-1'>
                        <Card className='pt-3 pb-1 px-3'>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>First Name</th>
                                        <th>Last Name</th>
                                        <th>Username</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td colSpan={2}>Larry the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default Dashboard;