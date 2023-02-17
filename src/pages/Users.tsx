import React, {useContext} from 'react';
import { Card, Col, Container, Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { GlobalState } from '../GlobalState';

import users_icon from '../images/iconubig.svg'
import usersf_icon from '../images/iconusbig.svg'
import ff_icon from '../images/iconuslbig.svg'
import ss_icon from '../images/iconussbig.svg'

const Users = () => {
    const state = useContext(GlobalState)
    const [data] = state.data
    // console.log(data.customers)

    
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
                                        <th>Organization</th>
                                        <th>Username</th>
                                        <th>Email</th>
                                        <th>Phone number</th>
                                        <th>Date joined</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data.customers?.map(({id, organization, username, email, phone_number, date_joined, status}: any) => (
                                            <tr key={id}>
                                                <td> 
                                                    <Link to={`/users/${id}`}> {organization} </Link>
                                                </td>
                                                <td> {username} </td>
                                                <td> {email} </td>
                                                <td> {phone_number} </td>
                                                <td> {date_joined} </td>
                                                <td> {status} </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </Table>
                        </Card>
                    </Row>
                </Container>
            </div>
        </>
    );
}

export default Users;