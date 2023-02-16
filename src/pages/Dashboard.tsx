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
                    <h6 className='page-tag'>Users</h6>

                    <Row className='mb-5'>
                        <Col>
                            <Card border="light" className='cardicon pt-3 pb-2 px-3'>
                                <span>
                                    <img src={users_icon} alt="icon" />
                                </span>
                                <h6>Users</h6>
                                <h5>2,543</h5>
                            </Card>
                        </Col>

                        <Col>
                            <Card border="light" className='cardicon pt-3 pb-2 px-3'>
                                <span>
                                    <img src={usersf_icon} alt="icon" />
                                </span>
                                <h6>Active users</h6>
                                <h5>2,653</h5>
                            </Card>
                        </Col>

                        <Col>
                            <Card border="light" className='cardicon pt-3 pb-2 px-3'>
                                <span>
                                    <img src={ff_icon} alt="icon" />
                                </span>
                                <h6>user with loans</h6>
                                <h5>12,543</h5>
                            </Card>
                        </Col>

                        <Col>
                            <Card border="light" className='cardicon pt-3 pb-2 px-3'>
                                <span>
                                    <img src={ss_icon} alt="icon" />
                                </span>
                                <h6>users with savings</h6>
                                <h5>102,453</h5>
                            </Card>
                        </Col>
                    </Row>

                    <Row className='m-1'>
                        <Card border="light" className='pt-3 pb-1 px-3'>
                            <Table striped bordered hover>
                                <thead>
                                    <tr className='text-uppercase'>
                                        <th>#</th>
                                        <th>Organization</th>
                                        <th>Username</th>
                                        <th>Email</th>
                                        <th>Phone number</th>
                                        <th>Date joined</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>
                                            <span>Pending</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>2</td>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>
                                            <span>Active</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td colSpan={2}>Larry the Bird</td>
                                        <td>@twitter</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>
                                            <span>Blacklisted</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>3</td>
                                        <td colSpan={2}>Larry the Bird</td>
                                        <td>@twitter</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>
                                            <span>Pending</span>
                                        </td>
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